# GitHub and Netlify Deployment Guide

This project is already arranged as a plain static site. `index.html` is at the repository root, so the Netlify publish directory is `.` and no build command is required.

## 1. Check the site locally

1. Extract the downloaded ZIP.
2. Open a terminal in the extracted `Colorado-Commercial-Cooling-Systems-Netlify` folder.
3. Start a local server:

   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000`.
5. Check the desktop and mobile navigation, every page, every image, and the contact form layout. The form itself is processed only after the site is deployed to Netlify.

## 2. Create the GitHub repository and push the files

1. Sign in to GitHub and select **New repository**.
2. Enter the repository name, for example `colorado-commercial-cooling-systems`.
3. Choose public or private visibility. Netlify can connect to either when granted access.
4. Leave **Add a README**, **Add .gitignore**, and **Choose a license** unselected because those files are already included where needed.
5. Select **Create repository**.
6. In the extracted project folder, run the following commands. Replace the placeholder URL with the repository URL GitHub displays:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

7. Refresh the GitHub repository page and confirm that `index.html`, `css/`, `js/`, and `images/` appear at the repository root.

GitHub's official reference is [Adding locally hosted code to GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/adding-locally-hosted-code-to-github).

## 3. Connect the GitHub repository to Netlify

1. Sign in to Netlify and open the correct team.
2. Select **Add new project**, then choose the option to import or deploy from an existing repository.
3. Choose **GitHub** and authorize Netlify if prompted.
4. Select the new repository. If it is not listed, update the Netlify GitHub app's repository access and try again.
5. Confirm these deployment settings:

   | Setting | Value |
   |---|---|
   | Production branch | `main` |
   | Base directory | Leave blank |
   | Build command | Leave blank |
   | Publish directory | `.` |

6. Start the deployment.
7. Open the generated `*.netlify.app` URL and test all pages before changing the custom domain.

The included `netlify.toml` also declares `publish = "."`. Future pushes to `main` will automatically trigger new deployments after the repository is connected. See Netlify's [deployment options and repository workflow](https://docs.netlify.com/start/choose-your-path/).

## 4. Connect the existing custom domain

Do not change the live DNS records until the Netlify preview has been reviewed.

1. In the Netlify project, open **Domain management**.
2. Select **Add a domain** or **Add custom domain**.
3. Enter the existing domain name and complete any ownership verification Netlify requests.
4. Choose one DNS approach:

   - **Keep the current DNS provider:** add the exact A, ALIAS/ANAME, or CNAME records Netlify shows for the domain. This is usually the safest choice when the domain already has email or other services.
   - **Move DNS to Netlify:** replace the domain's nameservers at the registrar with the nameservers Netlify assigns.

5. If moving nameservers, copy every required existing record first—especially MX, SPF, DKIM, DMARC, verification, and other TXT records used by email or business services.
6. Configure both the apex domain (`example.com`) and `www` if both should work, then select the preferred primary domain in Netlify.
7. Wait for DNS propagation and for Netlify to issue the HTTPS certificate.
8. Test both `https://example.com` and `https://www.example.com`, and confirm the preferred version redirects correctly.
9. Keep the previous hosting service active until the domain and form tests pass.

Use the record values displayed in the Netlify dashboard rather than copying addresses from a third-party tutorial. Netlify's current domain documentation is [Bring a domain to Netlify DNS](https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/).

## 5. Enable and test Netlify Forms

The form in `contact.html` is named `project-inquiry`, includes spam-honeypot protection, accepts one optional project file, and directs successful submissions to `thank-you.html`.

1. Deploy the site at least once with the form included.
2. In the Netlify project, open **Forms**.
3. If prompted, select **Enable form detection**, then trigger a new deploy. Netlify scans deployed HTML for forms.
4. Confirm that `project-inquiry` appears in the Forms area.
5. Open the live Netlify URL—not the local preview—and submit a test inquiry using an email address you can verify.
6. Confirm that the browser reaches the thank-you page.
7. Return to **Forms** and confirm that every field appears in the submission, including phone number and required timeframe.
8. Submit a second test with a small supported attachment and confirm that it is available in the submission. For large plan sets, place a secure document-sharing link in the project description and review the current limits for the selected Netlify plan.
9. Configure submission email notifications in the Forms settings and send one more test after saving the recipient address.
10. Review spam settings and delete the test submissions when finished.

If the form is not detected, verify that form detection is enabled, redeploy the site, and confirm that `contact.html` still contains `data-netlify="true"` and the hidden `form-name` input. Netlify's official setup reference is [Forms setup](https://docs.netlify.com/manage/forms/setup/).

## 6. Publish later updates

After editing the site locally, commit and push the changes:

```bash
git add .
git commit -m "Update website"
git push
```

Netlify will create a new deploy from the pushed commit. Review the deploy log and live site after each update.

