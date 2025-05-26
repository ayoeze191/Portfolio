"use client";

import React, { useEffect, useState } from "react";
import { request, gql } from "graphql-request";
import axios from "axios";
const GITHUB_ENDPOINT = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Use .env for security

const query = gql`
  query ($username: String!) {
    user(login: $username) {
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(privacy: PUBLIC, isFork: false) {
        totalCount
      }
      gists {
        totalCount
      }
      pullRequests {
        totalCount
      }
      issues {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

const GitHubContributions = ({ username }) => {
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = { Authorization: `Bearer ${GITHUB_TOKEN}` };

        const gqlRes = await request(
          GITHUB_ENDPOINT,
          query,
          { username },
          headers
        );
        const user = gqlRes.user;

        // calculate current streak
        const days =
          user.contributionsCollection.contributionCalendar.weeks.flatMap(
            (week) => week.contributionDays
          );
        let streak = 0;
        for (let i = days.length - 1; i >= 0; i--) {
          if (days[i].contributionCount > 0) streak++;
          else break;
        }

        // REST API fetch for forks, watchers, pushes
        const { data } = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );

        let forks = 0,
          watchers = 0,
          pushes = 0;
        data.forEach((repo) => {
          forks += repo.forks_count;
          watchers += repo.watchers_count;
          if (repo.pushed_at?.startsWith("2025")) pushes++;
        });

        setStats({
          "Current Streak": streak,
          "Total Contributions":
            user.contributionsCollection.contributionCalendar
              .totalContributions,
          "Total Repositories": user.repositories.totalCount,
          "2025 Pushes": pushes,
          Followers: user.followers.totalCount,
          Following: user.following.totalCount,
          "Total Stars": user.starredRepositories.totalCount,
          "Total Forks": forks,
          "Total Watchers": watchers,
          "Total Issues": user.issues.totalCount,
          "Total PRs": user.pullRequests.totalCount,
          "Total Gists": user.gists.totalCount,
        });

        setLoading(false);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      }
    };

    if (username) fetchStats();
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Object.entries(stats).map(([label, value]) => (
        <div
          key={label}
          className="bg-white border border-gray-200 rounded-2xl shadow p-4 transition hover:shadow-md"
        >
          <h4 className="text-sm text-gray-500 font-medium">{label}</h4>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default GitHubContributions;
