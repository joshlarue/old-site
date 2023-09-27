# Setting up a NextcloudPi instance on a Raspberry Pi 4 (With Troubleshooting Steps)
This guide includes setting up NCP with a Cloudflare tunnel to expose the pi outside your network without port forwarding, and it also includes setup instructions for a WiFi AP. It will include some troubleshooting steps as well for issues that I had while setting up.

## Materials needed
- Raspberry Pi 4 (you can use an older model but I have not tested with an older model!)
- 8GB SD card
- USB C cable (to power the Pi)
- External storage (optional -- I used 2 2TB Seagate hard drives and a hard drive dock with USB 3)
- Ethernet cable + ethernet adaptor for your computer

## Downloading and Installing NextcloudPi
Download the latest NCP release from their [GitHub releases page](https://github.com/nextcloud/nextcloudpi/releases). (Pro tip: download the .zip with "RaspberryPi" in its name.)

Etcher is a tool you can use to easily flash images to an SD card. Download and install Etcher from [their website](https://etcher.balena.io/).

Once both Etcher and the NextcloudPi .zip file are downloaded, extract the .zip file and open it using Etcher, selecting your SD card that you'll be using in the Pi as the target. Flash the image, eject the SD card once it's done validating, insert it into the Pi you're using, and power it up!

## Setting up Nextcloud
Connect your pi to your computer with an ethenet cable. This will network your two devices together so that you can access the web console. Navigate to https://nextcloud.local in your web browser. If you have any warnings about proceeding being unsafe, ignore them and proceed.

Copy the username and password for both the admin panel and the web interface somewhere safe on your computer. You can change these passwords later, but you need them for now. Go ahead and press activate. After it's activated, navigate to https://nextcloudpi.local:4443 in your web browser (this is the admin panel). Log in with your username and password that you copied down.

Once you've logged in, scroll down on the menu on the left side of the page and click on "SSH." Set up a new user and password (make sure to enable sudo). If that change is successfully applied, you can now open up a terminal or SSH client on your computer and ssh to your Pi.

```
ssh <username>@nextcloudpi.local
```

