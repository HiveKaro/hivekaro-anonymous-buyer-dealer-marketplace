# Step-by-Step Guide: Deploy HiveKaro to GitHub Pages with Custom Domain

## Prerequisites
- GitHub account
- Git installed on your computer
- Custom domain purchased on GoDaddy
- Node.js and npm installed

---

## PART 1: Configure Next.js for GitHub Pages

### ✅ Step 1: Configuration is Already Done
The project has been configured with:
- Static export enabled (`output: 'export'`)
- Images set to unoptimized (required for static export)
- GitHub Actions workflow created

---

## PART 2: Push Code to GitHub

### Step 2: Initialize Git Repository (if not already done)
```bash
# Check if git is initialized
git status

# If not initialized, run:
git init
```

### Step 3: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `hivekaro-anonymous-buyer-dealer-marketplace` (or your preferred name)
4. Set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 4: Connect Local Repository to GitHub
```bash
# Add all files
git add .

# Commit files
git commit -m "Initial commit: HiveKaro marketplace"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/hivekaro-anonymous-buyer-dealer-marketplace.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## PART 3: Enable GitHub Pages

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab (top navigation)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. The page will refresh - GitHub Actions will now deploy automatically

### Step 6: Verify Deployment
1. After pushing, go to **"Actions"** tab in your repository
2. You should see a workflow run "Deploy to GitHub Pages"
3. Wait for it to complete (takes 2-3 minutes)
4. Once green ✅, go to **Settings → Pages**
5. Your site URL will be: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## PART 4: Configure Custom Domain (GoDaddy)

### Step 7: Get Your GitHub Pages URL
1. Go to your repository → **Settings → Pages**
2. Note your GitHub Pages URL: `https://YOUR_USERNAME.github.io/REPO_NAME`
3. Keep this tab open - you'll need it

### Step 8: Configure DNS in GoDaddy

#### For Root Domain (e.g., `yourdomain.com`):

1. **Log in to GoDaddy**
   - Go to [godaddy.com](https://godaddy.com) and sign in
   - Click **"My Products"** → **"DNS"** next to your domain

2. **Add A Records** (for root domain):
   - Delete any existing A records pointing to old IPs
   - Add **4 A records** with these values:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     TTL: 600 seconds
     ```
     ```
     Type: A
     Name: @
     Value: 185.199.109.153
     TTL: 600 seconds
     ```
     ```
     Type: A
     Name: @
     Value: 185.199.110.153
     TTL: 600 seconds
     ```
     ```
     Type: A
     Name: @
     Value: 185.199.111.153
     TTL: 600 seconds
     ```

3. **Add CNAME Record** (for www subdomain):
   - Type: **CNAME**
   - Name: **www**
   - Value: **YOUR_USERNAME.github.io** (replace with your GitHub username)
   - TTL: 600 seconds

#### For Subdomain (e.g., `www.yourdomain.com`):
- Only add the CNAME record pointing to `YOUR_USERNAME.github.io`

### Step 9: Add Custom Domain in GitHub
1. Go to your repository → **Settings → Pages**
2. Under **"Custom domain"**, enter your domain: `yourdomain.com`
3. Check **"Enforce HTTPS"** (wait until DNS propagates first)
4. Click **"Save"**

### Step 10: Create CNAME File
GitHub will automatically create a `CNAME` file in your repository. If it doesn't, create it manually:

1. In your repository, click **"Add file" → "Create new file"**
2. Filename: `public/CNAME` (create `public` folder if it doesn't exist)
3. Content: `yourdomain.com` (your domain only, no https://)
4. Click **"Commit changes"**

---

## PART 5: Update Next.js Configuration for Custom Domain

### Step 11: Update basePath for Custom Domain

Once your custom domain is working, update the GitHub Actions workflow:

1. Edit `.github/workflows/deploy.yml`
2. Change this line:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
   ```
   To:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: ''
   ```
3. Commit and push:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Update basePath for custom domain"
   git push
   ```

---

## PART 6: Verify Everything Works

### Step 12: Wait for DNS Propagation
- DNS changes can take **24-48 hours** to fully propagate
- Check propagation status: [whatsmydns.net](https://www.whatsmydns.net)
- Enter your domain and check if A records point to GitHub IPs

### Step 13: Test Your Site
1. Visit `http://yourdomain.com` (might take a few minutes)
2. Once working, GitHub will enable HTTPS automatically
3. Test `https://yourdomain.com`
4. Test `https://www.yourdomain.com`

---

## Troubleshooting

### Issue: Site shows 404
- **Solution**: Check that basePath matches your repository name in GitHub Actions
- **Solution**: Verify `out` folder exists after build

### Issue: CSS/Images not loading
- **Solution**: Ensure `basePath` is correctly set in `next.config.ts`
- **Solution**: Check browser console for 404 errors

### Issue: Custom domain not working
- **Solution**: Wait 24-48 hours for DNS propagation
- **Solution**: Verify A records point to correct GitHub IPs
- **Solution**: Check CNAME record for www subdomain
- **Solution**: Ensure CNAME file exists in repository

### Issue: GitHub Actions failing
- **Solution**: Check Actions tab for error messages
- **Solution**: Verify Node.js version in workflow matches your local version
- **Solution**: Ensure all dependencies install correctly

### Issue: "Repository not found" error
- **Solution**: Make sure repository is set to **Public** (GitHub Pages requires public repos for free tier)

---

## Quick Reference

### GitHub Pages IPs (for A records):
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### Important Files:
- `.github/workflows/deploy.yml` - Deployment workflow
- `next.config.ts` - Next.js configuration
- `public/CNAME` - Custom domain file (auto-created by GitHub)

### Useful Commands:
```bash
# Build locally to test
npm run build

# Check if out folder was created
ls out

# Push changes
git add .
git commit -m "Your message"
git push
```

---

## Next Steps After Deployment

1. ✅ Monitor GitHub Actions for successful deployments
2. ✅ Set up custom domain in GitHub Pages settings
3. ✅ Wait for DNS propagation (24-48 hours)
4. ✅ Enable HTTPS (automatic after DNS propagates)
5. ✅ Test all pages on your custom domain
6. ✅ Update any hardcoded URLs in your code to use the custom domain

---

**Need Help?** Check GitHub Pages documentation: https://docs.github.com/en/pages

