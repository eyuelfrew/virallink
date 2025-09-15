# Next.js Deployment Guide for cPanel with Node.js

## ✅ Pre-Deployment Checklist

Your Next.js application has been checked and is ready for deployment:

- ✅ **Build Status**: Successfully builds without errors
- ✅ **Code Quality**: All linting warnings resolved
- ✅ **TypeScript**: No type errors
- ✅ **Dependencies**: All packages properly configured
- ✅ **Custom Server**: `server.js` already configured
- ✅ **Environment**: Production-ready configuration

---

## 🚀 Deployment Steps for virallinkdigital.com

### Step 1: Prepare Your Application

#### 1.1 Build the Application Locally
```bash
npm run build
```

#### 1.2 Create Deployment Package
Create a ZIP file containing these files/folders:
- ✅ `server.js`
- ✅ `package.json`
- ✅ `next.config.ts`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `postcss.config.mjs`
- ✅ `.next/` folder (generated after build)
- ✅ `public/` folder
- ✅ `src/` folder
- ❌ **DO NOT INCLUDE**: `node_modules/`, `.git/`, `.env.local`

### Step 2: Upload to cPanel

#### 2.1 Access File Manager
1. Log into your cPanel account
2. Navigate to **File Manager**
3. Create a new directory: `/home/username/viralink-app` (outside public_html)
4. Upload your ZIP file to this directory
5. Extract the ZIP file

#### 2.2 File Structure After Upload
```
/home/username/viralink-app/
├── server.js
├── package.json
├── next.config.ts
├── .next/
├── public/
├── src/
└── ... (other config files)
```

### Step 3: Configure Node.js Application

#### 3.1 Setup Node.js App in cPanel
1. Go to **Setup Node.js App** in cPanel
2. Click **CREATE APPLICATION**
3. Configure:
   - **Node.js version**: 18.x or 20.x (recommended)
   - **Application mode**: Production
   - **Application root**: `viralink-app`
   - **Application URL**: `virallinkdigital.com`
   - **Application startup file**: `server.js`
4. Click **CREATE**

#### 3.2 Install Dependencies
1. After creation, scroll to **Actions** section
2. Click **Run NPM Install**
3. Wait for installation to complete

### Step 4: Environment Variables (Optional)

If you need to configure EmailJS or other services:

1. In the Node.js app settings, find **Environment Variables**
2. Add these variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NODE_ENV=production
   ```

### Step 5: Start the Application

1. In the **Actions** section, click **START APP**
2. Wait for the status to show "Running"
3. Your application should now be accessible at `https://virallinkdigital.com`

---

## 🔧 Server Configuration Details

### Current server.js Configuration
Your `server.js` is already optimized for cPanel deployment:

```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false; // Production mode
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000; // cPanel assigns port automatically

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
```

---

## 📊 Performance Optimizations

Your application is already optimized with:

- ✅ **Image Optimization**: WebP and AVIF formats enabled
- ✅ **Compression**: Gzip compression enabled
- ✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options
- ✅ **Caching**: 60-second minimum cache TTL for images
- ✅ **Static Generation**: All pages pre-rendered for faster loading

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Application Won't Start
- Check Node.js version compatibility (use 18.x or 20.x)
- Verify `server.js` path is correct
- Check application logs in cPanel

#### 2. Missing Dependencies
- Ensure `package.json` is included in upload
- Run "NPM Install" again from cPanel
- Check for any missing dev dependencies that should be in production

#### 3. 404 Errors for Pages
- Verify `.next` folder was uploaded after build
- Check that all route files are present in `src/app/`
- Restart the application

#### 4. Static Assets Not Loading
- Ensure `public/` folder is uploaded
- Check file permissions (should be 644 for files, 755 for directories)
- Verify image paths in components

#### 5. Slow Loading
- Enable cPanel's CloudFlare if available
- Verify compression is working
- Check image optimization settings

---

## 🔄 Updating Your Application

### For Code Changes:
1. Make changes locally
2. Run `npm run build`
3. Upload only changed files via File Manager
4. Restart the Node.js application in cPanel

### For Dependency Changes:
1. Upload new `package.json`
2. Run "NPM Install" in cPanel
3. Restart the application

---

## 📋 Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Contact form functions (if EmailJS is configured)
- [ ] Mobile responsiveness
- [ ] Page load speed is acceptable
- [ ] SEO metadata is present
- [ ] SSL certificate is active

---

## 📞 Support

If you encounter issues:

1. **Check cPanel Logs**: Node.js app section shows application logs
2. **Contact Hosting Provider**: For server-specific issues
3. **Verify Configuration**: Double-check all settings match this guide

---

## 🎉 Congratulations!

Your Next.js application should now be live at `https://virallinkdigital.com`!

The application includes:
- Fully responsive design
- SEO optimizations
- Fast loading performance
- Professional animations
- Contact functionality ready for EmailJS integration

---

*Last updated: January 2025*
*Application version: 1.0.0*