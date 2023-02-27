# Auction Website (Semester Project 2)
![auction-website-1](https://user-images.githubusercontent.com/95305401/221525729-4f420282-881d-48cc-a12f-cf3b29ea7843.png)

## Description

This breif was assigned to me as the second semester project during my Front-End studies. The breif was described as follows:

"*An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.
When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings*".

<br />

I decided to target the website at electronics. The idea is that the website is a place where users can log in to auction their old electronics, or bid on other users auctions.

<br />

The project consists of 6 pages:
- A home page where users can view / filter auction listings
- A listing page showing the details of the selected listing
  - An unregistered user can view listing details
  - A registered user can make a bid
- A create auction page where users can create a new auction
- A profile page where users can edit their profile icon
- A register page where the user can create a new account
- A login page where a user can log in to their account

<br />

The following user stories were required by the breif:
- [x] A user with a stud.noroff.no email may register
- [x] A registered user may login
- [x] A registered user may logout
- [x] A registered user may update their avatar
- [x] A registered user may view their total credit
- [x] A registered user may create a Listing with a title, deadline date, media gallery and description
- [x] A registered user may add a Bid to another user’s Listing
- [x] A registered user may view Bids made on a Listing
- [x] An unregistered user may search through Listings

<br />

Additionally I implemented:
- Ability to edit / delete auction listings
- Ability to view auction listings / bids made by a user
- A functional media gallery on the listing page

<br />

## Planning and development
![Style tile](https://user-images.githubusercontent.com/95305401/221539887-6659dab9-a38d-476f-a0fb-b2878e5534db.png)
### Design
Designed and planned using:
- Google sheets (Gantt chart)
- [Adobe XD](https://helpx.adobe.com/xd/get-started.html) (style guide and prototype)
- [Trello](https://trello.com) (kanban project board)

### Built With
The project was created using:
- HTML
- JavaScript
- A CSS Framework ([Bootstrap 5.2.3](https://getbootstrap.com/))
- [SASS 1.58.0](https://sass-lang.com/install)
- [Noroff Auction API](https://docs.noroff.dev/auctionhouse-endpoints/authentication)

### Deployment
The project was deployed using:
- [Github pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
  - Hosted on my own domain

<br />

## Setup and running the project
### Installing
1. Clone the repo
```
git clone https://github.com/jonaslod/auction-website.git
```
2. Install dependencies
```
npm i
```
3. Build dist
```
npm run build
```

### Running
The project contains the live-server (1.2.2) dependency, which can be activated using (this also activates the sass watch/build script)
```
npm run watch
```

<br />

## Contributing
If you wish to contribute by sending in feedback, you are welcome to do so. All feedback is welcomed. If you want to do submit code to the project, be sure to open a pull request so the code can be reviewed beforehand. Any issues can be reported [here](https://github.com/jonaslod/auction-website/issues).

<br />

## Contact
[My Twitter profile](https://twitter.com/jonaslodcontact)

<br />

## Acknowledgments
Thank you [@Fermain](https://github.com/Fermain) for showing me a [way to clear HTML](https://github.com/jonaslod/social-media/pull/2#discussion_r1040937689) without using .innerHTML = "";

<br />

## Additional screenshots
![auction-website-4](https://user-images.githubusercontent.com/95305401/221532685-592da807-60a6-4e83-8242-981ed1712c36.png)
![auction-website-2](https://user-images.githubusercontent.com/95305401/221532638-68f14f7f-62da-41b9-a77f-c49250affea1.png)
![auction-website-3](https://user-images.githubusercontent.com/95305401/221532662-68b61f46-57fb-4608-aa0c-061686a15786.png)
