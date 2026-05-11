# Jingyao Qi Personal Website

Resume-first personal portfolio for Jingyao Qi, built with Astro, React, TypeScript, and Tailwind CSS.

The site builds to static files in `dist/`, so it can be hosted on AWS EC2 with Nginx, AWS Amplify, S3 + CloudFront, or another static hosting provider later.

## Requirements

Astro 6 requires Node.js `>=22.12.0`.

Check your version:

```bash
node -v
npm -v
```

If CloudShell or your EC2 instance has Node 20, install Node 22 with `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
nvm alias default 22
node -v
```

If `nvm` is not available after sourcing `.bashrc`, run:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 22
nvm use 22
```

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. The English site is at `/` and the Chinese site is at `/zh/`.

## Build

```bash
npm install
npm run build
```

The production output is generated in `dist/`.

## Deploy on Amazon Linux EC2 with Nginx

Use this flow when you SSH into an Amazon Linux EC2 instance as `ec2-user` and build/deploy directly on the instance.

### 1. SSH into EC2

From CloudShell or your local terminal:

```bash
chmod 400 <your-key>.pem
ssh -i <your-key>.pem ec2-user@<your-ec2-public-ip>
```

Use the EC2 **Public IPv4 address**, not the private IPv4 address.

### 2. Install Nginx, Git, and Node 22

```bash
sudo yum update -y
sudo yum install nginx git -y
sudo systemctl enable nginx
sudo systemctl start nginx

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22
nvm alias default 22
node -v
npm -v
```

`node -v` should show Node 22 or newer.

### 3. Clone the GitHub repo

```bash
cd ~
git clone https://github.com/<your-github-username>/personal-site.git
cd personal-site
```

If your repository has a different name, replace `personal-site` with that repo name.

### 4. Build the site

```bash
npm install
npm run build
```

The production files will be generated in `dist/`.

### 5. Publish to Nginx

```bash
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r dist/* /usr/share/nginx/html/
sudo systemctl reload nginx
```

### 6. Open the EC2 security group

In the EC2 security group inbound rules, allow:

```text
HTTP  TCP  80  0.0.0.0/0
```

Then visit:

```text
http://<your-ec2-public-ip>
```

## Updating the Amazon Linux EC2 deployment

After changing the website and pushing to GitHub:

```bash
ssh -i <your-key>.pem ec2-user@<your-ec2-public-ip>
cd ~/personal-site
git pull
nvm use 22
npm install
npm run build
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r dist/* /usr/share/nginx/html/
sudo systemctl reload nginx
```

## Optional: AWS Amplify

If you later prefer GitHub-based automatic deployments, use AWS Amplify with:

```text
Build command: npm run build
Output directory: dist
```

## Optional: S3 + CloudFront

1. Run `npm run build`.
2. Upload the contents of `dist/` to an S3 bucket configured for static hosting or private origin access.
3. Put CloudFront in front of the bucket.
4. Configure default root object as `index.html`.
5. Add a custom domain and TLS certificate through AWS Certificate Manager if needed.

## Portability

Because the site builds to plain static files, the same `dist/` directory can be deployed to Cloudflare Pages, Netlify, Vercel, Azure Static Web Apps, GitHub Pages, or any object storage plus CDN setup.

## Content editing

Most site content lives in:

- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/i18n.ts`

Update those files to change resume details, project entries, bilingual copy, or skills.
