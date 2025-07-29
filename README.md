# Master Sheet Automation

This Google Apps Script aggregates data from **6 different live Google Sheets** into a single master dashboard. It supports real-time syncing and batch processing for performance.

## ✅ Features
- Connects to multiple Google Sheets via URL
- Pulls and combines rows into a master sheet
- Adds source tracking per row (e.g., Sheet 1, Sheet 2...)
- Auto-refresh support via triggers

## 📄 Sample Master Sheet Output

| Item        | Value | Source   |
|-------------|-------|----------|
| Product A   | 100   | Sheet 1  |
| Product B   | 150   | Sheet 2  |
| Product A   | 120   | Sheet 4  |

## 🔧 How to Use
1. Create a sheet named `Master` in your destination file.
2. Paste the script in Extensions > Apps Script.
3. Replace example URLs with actual sheet links.
4. Run `aggregateSheets()` to fetch and merge.

## 🔐 Notes
- Ensure all source sheets are shared with edit/view access.
- Script can be automated via time-driven triggers.

## 👩‍💻 Developer
Prachi Gaikwad
