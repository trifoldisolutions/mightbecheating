# Project Overview

> After making any edit, and before ending a turn or task, verify that `npm run dev` and `npm run tw` are still running. If either has stopped, treat it as crashed — don't assume it restarts on its own. Restart it before finishing the edit or task, and only report the work as done once both are confirmed alive again.

## Stack
- Node.js (Express)
- Mongoose (MongoDB)
- EJS (Templating)
- Tailwind CSS (Styling)
- Nodemon (Development)

## Scripts
- `npm run dev`: Starts the server with nodemon.
- `npm run tw`: Starts Tailwind CSS watch mode.
- `npm run dev:all`: Runs both in one terminal pane.


---

## Agent Instructions for this Project

**Direct File Manipulation via Internal Tools**

When interacting with this project, you are equipped with internal tools (such as `python` and `terminal`) that have direct access to the project directory: `F:trifoldi\projects\mightbecheating`.

**Guidelines:**

1. **Prefer Tools over Manual Copy-Paste:** Do not ask the user to copy, paste, or run long code blocks in their terminal if you can accomplish the task using your internal tools.
2. **File Management:** Use your tools to:
   - **Create** new files (e.g., using `python` to write content).
   - **Update/Edit** existing files by overwriting them with the full updated content.
   - **Read** files to understand the current project state.
   - **Delete** files or directories when requested.
3. **Path Management:** Always ensure you are targeting the correct directory (`F:trifoldi\projects\mightbecheating`) when executing commands to avoid creating files in the wrong workspace.

**Goal:** Minimize friction for the user by performing file-system operations directly through your interface rather than requesting manual input.
