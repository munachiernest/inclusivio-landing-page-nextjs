// app/admin/registrations/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRegistrations } from "@/app/actions/registration";
import type { Registration } from "@/lib/db";
import { Eye, EyeOff, Download, Lock } from "lucide-react"; // Added Download, Lock icons
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Import Tooltip components

// Simple email redaction function (remains the same)
const redactEmail = (email: string): string => {
  if (!email || !email.includes("@")) return "Invalid Email";
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) return "Invalid Email";
  const redactedLocal =
    localPart.length <= 1 ? "*" : `${localPart[0]}***${localPart.slice(-1)}`;
  return `${redactedLocal}@${domain}`;
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [authError, setAuthError] = useState("");

  const CORRECT_PASSWORD = "1869"; // HIGHLY INSECURE - DEMO ONLY

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      const result = await getRegistrations();
      if (result.success) {
        setRegistrations(result.data);
      } else {
        setError(result.message || "Failed to fetch registrations.");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (password === CORRECT_PASSWORD) {
      setIsAuthorized(true);
      setShowPasswordPrompt(false);
    } else {
      setAuthError("Incorrect password. Please try again.");
      setIsAuthorized(false);
    }
    setPassword("");
  };

  const exportCSV = () => {
    if (!isAuthorized || !registrations.length) return; // Only proceed if authorized

    let csv = "Name,Email,Company,Feature,UseCase,Timestamp\n";
    registrations.forEach((reg) => {
      const safeName = `"${(reg.name || "").replace(/"/g, '""')}"`;
      const safeEmail = `"${(reg.email || "").replace(/"/g, '""')}"`;
      const safeCompany = `"${(reg.company || "").replace(/"/g, '""')}"`;
      const safeFeature = `"${(reg.feature || "").replace(/"/g, '""')}"`;
      const safeUseCase = `"${(reg.useCase || "").replace(/"/g, '""')}"`;
      const safeTimestamp = `"${(reg.timestamp || "").replace(/"/g, '""')}"`;
      csv += `${safeName},${safeEmail},${safeCompany},${safeFeature},${safeUseCase},${safeTimestamp}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `registrations-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <TooltipProvider>
      {" "}
      {/* Wrap with TooltipProvider */}
      <div className="container mx-auto py-8 px-4 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-brand-accent">
          Admin Registrations
        </h1>

        {/* Password Prompt Section (remains the same) */}
        {showPasswordPrompt && (
          <div className="max-w-sm mx-auto mb-8 p-6 bg-[#0D1A07] border border-[#304F21] rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Enter Access Code
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {/* ... (input and error message) ... */}
              <div>
                <label htmlFor="admin-password" className="sr-only">
                  Password
                </label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full"
                />
              </div>
              {authError && <p className="text-sm text-red-400">{authError}</p>}
              <Button
                type="submit"
                className="w-full bg-brand-accent text-white hover:bg-brand-accent/80"
              >
                Unlock Emails & Export
              </Button>
            </form>
          </div>
        )}

        {/* Data Table Section */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            {loading
              ? "Loading..."
              : `${registrations.length} total registrations`}
          </p>
          <div className="flex items-center gap-4">
            {isAuthorized && (
              <span className="flex items-center text-sm text-green-400">
                <Eye className="w-4 h-4 mr-1" /> Emails Visible
              </span>
            )}
            {!showPasswordPrompt && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsAuthorized(false);
                  setShowPasswordPrompt(true);
                }}
                className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              >
                <EyeOff className="w-4 h-4 mr-1" /> Lock Emails
              </Button>
            )}

            {/* Updated Export Button with Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Span needed for Tooltip when button is disabled */}
                <span tabIndex={0}>
                  <Button
                    onClick={exportCSV}
                    disabled={
                      loading || registrations.length === 0 || !isAuthorized
                    } // Disable if not authorized
                    className="bg-brand-button hover:bg-brand-button-hover text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                  </Button>
                </span>
              </TooltipTrigger>
              {!isAuthorized && ( // Show tooltip only when disabled due to authorization
                <TooltipContent className="bg-gray-800 text-white border-gray-700">
                  <p className="flex items-center">
                    <Lock className="w-3 h-3 mr-1" /> Enter password to enable
                    export.
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          </div>
        </div>

        {error && <p className="text-red-400 mb-4">Error: {error}</p>}

        {/* Table Structure (remains the same) */}
        <div className="bg-[#0D1A07] border border-[#304F21] rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-[#304F21]">
            <thead className="bg-[#122013]">
              <tr>
                {/* Adjusted Headers */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Email {isAuthorized ? "(Visible)" : "(Redacted)"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Use Case
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#0D1A07] divide-y divide-[#304F21]">
              {registrations.length === 0 && !loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                registrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-[#122013]/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                      {reg.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-300">
                      {" "}
                      {/* Monospace for redacted */}
                      {isAuthorized ? reg.email : redactEmail(reg.email)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {reg.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {reg.feature}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate"
                      title={reg.useCase}
                    >
                      {reg.useCase || "-"}
                    </td>{" "}
                    {/* Truncate long use cases */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {new Date(reg.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-center mt-8 text-red-500">
          **Security Warning:** Email protection uses a hardcoded password
          visible in browser source code. Use proper authentication for
          production environments.
        </p>
      </div>
    </TooltipProvider>
  );
}
