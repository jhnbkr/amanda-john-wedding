# Amanda & John Wedding

## Overview

A wedding website built with Next.js that allows guests to RSVP and submit their
information. RSVP data is stored in Google Sheets for easy management.

**Live Site:** [https://amanda-john.wedding](https://amanda-john.wedding)

## Requirements

This project submits data to Google Sheets and requires:

- A Google Cloud Platform service account with Editor role
- Access to the target Google Sheet
- Service account credentials in your `.envrc`

## Getting Started

1. Install Node.js (via [asdf](https://asdf-vm.com/) or [nvm](https://github.com/nvm-sh/nvm)):

```bash
# Option 1: Using asdf
asdf install

# Option 2: Using nvm
nvm install
```

2. Set up environment variables:

```bash
# Option 1: Using direnv (recommended)
cp .envrc.template .envrc
# Edit .envrc with your values
direnv allow

# Option 2: Manual setup
cp .envrc.template .env
# Edit .env with your values
export $(cat .env | xargs)
```

3. Start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Accessibility

This application follows the
[Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag).

## License

The MIT License (MIT). See [License File](LICENSE.md) for more information.
