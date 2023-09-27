# Setting up a NextcloudPi instance on a Raspberry Pi 4
This guide includes setting up NCP with a Cloudflare tunnel to expose the pi outside your network without port forwarding, and it also includes setup instructions for a WiFi AP.

## Materials needed
- Raspberry Pi 4 (you can use an older model but I have not tested with an older model!)
- 8GB SD card
- USB C cable (to power the Pi)
- External storage (optional -- I used 2 2TB Seagate hard drives and a hard drive dock with USB 3)

## Downloading and Installing NextcloudPi
Download the latest NCP release from their [GitHub releases page](https://github.com/nextcloud/nextcloudpi/releases). (Pro tip: download the .zip with "RaspberryPi" in its name.)

Etcher is a tool you can use to easily flash images to an SD card. Download and install Etcher from [their website](https://etcher.balena.io/).

Once both Etcher and the NextcloudPi .zip file are downloaded, extract the .zip file and open it using Etcher, selecting your SD card that you'll be using in the Pi as the target.