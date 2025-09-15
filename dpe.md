# Deployment Instructions for Next.js on cPanel

This guide will walk you through the steps to deploy your Next.js application to a cPanel environment with Node.js support.

## Prerequisites

*   Access to your cPanel account.
*   Node.js application manager enabled in cPanel.
*   SSH access to your cPanel account (optional, but recommended for easier file management).

## Steps

### 1. Prepare Your Application

1.  **Install Dependencies Locally:**
    Ensure all project dependencies are installed.
    ```bash
    npm install
    ```

2.  **Build for Production:**
    Generate the optimized production build of your Next.js application. This will create a `.next` directory.
    ```bash
    npm run build
    ```

### 2. Upload Files to cPanel

You need to upload the following directories and files to your application's root directory on cPanel (e.g., `home/yourusername/nextjsapp`):

*   `package.json`
*   `package-lock.json` (or `yarn.lock` if you use Yarn)
*   `server.js` (the modified custom server file)
*   `.next/` (the production build output)
*   `node_modules/` (you can upload this, or install it directly on cPanel in the next step)
*   `public/` (your static assets)

**Recommended Upload Method:**
Compress your entire project (excluding `node_modules` if you plan to install it on cPanel) into a `.zip` or `.tar.gz` file, upload it via cPanel's File Manager, and then extract it.

### 3. Configure Node.js Application in cPanel

1.  **Log in to cPanel.**
2.  Navigate to **Software** > **Setup Node.js App**.
3.  Click **CREATE APPLICATION**.
4.  **Application Root:** Specify the path where you uploaded your application files (e.g., `/home/yourusername/nextjsapp`).
5.  **Application URL:** Choose the domain or subdomain where your application will be accessible (e.g., `viallink.com`).
6.  **Application Startup File:** Enter `server.js`. This tells cPanel to use your custom server.
7.  **Passenger Phusion:** Ensure this is enabled.
8.  Click **CREATE**.

### 4. Install Dependencies on cPanel (if not uploaded)

If you did not upload the `node_modules` directory, you need to install them on cPanel:

1.  In the Node.js application manager, find your application and click the **pencil icon** (Edit).
2.  Click **Run NPM Install**. This will install all dependencies listed in your `package.json`.

### 5. Start the Application

1.  In the Node.js application manager, find your application.
2.  Click **START APPLICATION**.

### 6. Troubleshooting

*   **Check Logs:** If your application doesn't start, check the application logs in the cPanel Node.js application manager for errors.
*   **Environment Variables:** Ensure any necessary environment variables (e.g., API keys) are set in the cPanel Node.js application manager.
*   **File Permissions:** Ensure your application files have correct read permissions.
