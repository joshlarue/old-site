# Setting up a NextcloudPi instance with RAID on a Raspberry Pi 4 (With Troubleshooting Steps)
## Optional setup: PhotoPrism and Cloudflare Tunnels

This guide includes setting up NCP with a Cloudflare tunnel to expose the Pi outside your network without port forwarding, and it also includes setup instructions for PhotoPrism. It will include some troubleshooting steps as well for issues that I had while setting up.
## Materials needed

- Raspberry Pi 4 with 4 or 8GB of RAM (you can use an older model but I have not tested with an older model!)
- 16GB SD card
- USB C cable (to power the Pi)
- External storage (I used two 2TB Seagate hard drives and a hard drive dock with USB 3)
- Ethernet cable + ethernet adaptor for your computer

## Downloading and Installing NextcloudPi

Download the latest NCP release from their [GitHub releases page](https://github.com/nextcloud/nextcloudpi/releases). (Pro tip: download the .zip with "RaspberryPi" in its name.)

Etcher is a tool you can use to easily flash images to an SD card. Download and install Etcher from [their website](https://etcher.balena.io/).

Once both Etcher and the NextcloudPi .zip file are downloaded, extract the .zip file and open it using Etcher, selecting your SD card that you'll be using in the Pi as the target. Flash the image, eject the SD card once it's done validating, insert it into the Pi you're using, and power it up!
## Setting up Nextcloud

Connect your pi to your computer with an ethenet cable. This will network your two devices together so that you can access the web console. Navigate to [https://nextcloud.local](https://nextcloud.local/) in your web browser. If you have any warnings about proceeding being unsafe, ignore them and proceed.

Copy the username and password for both the admin panel and the web interface somewhere safe on your computer. You can change these passwords later, but you need them for now. Go ahead and press activate. After it's activated, navigate to [https://nextcloudpi.local:4443](https://nextcloudpi.local:4443/) in your web browser (this is the admin panel). Log in with your username and password that you copied down.

Once you've logged in, scroll down on the menu on the left side of the page and click on "SSH." Set up a **new user and password (make sure to enable sudo)**. If that change is successfully applied, you can now open up a terminal or SSH client on your computer and ssh to your Pi.


```
ssh <username>@nextcloudpi.local
```


## Networking Pt. 1 - Connecting to the Internet

In order to connect to wifi, enter
```
sudo raspi-config
```
and navigate through the menu to set up a wireless internet connection. This will allow you to download the necessary packages for the following setup.

If your wifi network is going to give you more trouble than necessary to set up a wireless connection to your Pi (e.g. a WPA3 enterprise), you can share internet from your computer through the Ethernet cable for now, and just plug it directly into your home's ethernet system port for faster/more reliable speeds. (I did this on Windows 11 using the "view network connections" panel.)
## Timezone

You will need to ensure the time is set correctly on the RPi or you will not be able to use the apt package manager. Enter
```
timedatectl
```
to check if your time and time zone is set correctly. If it is not, [this](https://www.howtogeek.com/782032/how-to-use-the-timedatectl-command-on-linux/) article will help you with the timedatectl command.

Once your timezone is set up successfully, go ahead and
```
sudo apt update -y && sudo apt upgrade -y
```
in order to update your system!
## External storage setup

I used two 2TB Seagate Barracuda HDDs with a cheap [docking station](https://www.bestbuy.ca/en-ca/product/insignia-usb-3-0-dual-hard-drive-docking-station-only-at-best-buy/15815030) from Best Buy. I just plugged the hard drives in, powered up the dock, and connected it to my Pi.

[This article](https://www.stewright.me/2017/08/create-raid-volume-raspberry-pi/) by Ste Wright describes in good detail how to set up a RAID volume with this setup.

Once you have mounted it to the directory where you'd like your files to live (I chose /mnt/nextcloud), navigate back to [https://nextcloud.local:4443](https://nextcloud.local:4443/) and, under the "Config" section, select nc-datadir. Input your new directory where your storage is located and ensure the operation is successful.

## If you have come this far and all you want is a Nextcloud instance on your home network, you are done!

If you'd like to configure PhotoPrism on the same Pi, or want to configure Cloudflare tunnels in order to access your server from outside your home without port-forwarding, feel free to continue!

## Setting up PhotoPrism
[This documentation from PhotoPrism](https://docs.photoprism.app/getting-started/docker-compose/#__tabbed_1_3)is an extremely helpful resource, and where I got much of the instructions for this next section. Check out their docs, as they worked hard on them!

This installation guide uses docker-compose to easily and quickly spin up a container on the Raspberry Pi. Make sure you have installed the proper dependencies:
```
sudo apt install -y docker docker-compose wget
```

Use the following commands to create a directory for the container and download the up-to-date docker-compose file:
```
mkdir photoprism
cd photoprism
wget https://dl.photoprism.app/docker/arm64/docker-compose.yml
```

In your PhotoPrism directory, edit the docker-compose file with:
```
nano docker-compose.yml
```

Find the following lines:
```
services:
  photoprism:
    volumes:
      - "~/Pictures:/photoprism/originals"
```
and change "~/Pictures" to the location of your Photos folder on your external storage (in my case, this would be /mnt/nextcloud/ncdata/data/Photos). You can also add other folders if you have several photos folders on your Nextcloud instance.

Find the following lines:
```
services:
  photoprism:
    volumes:
      - "./storage:/photoprism/storage"
```
and change "./storage" to "~/photoprism" (or whichever directory your docker-config.yml is in).

You're pretty much done! Now you just have to start the docker container, and you'll be set! Start the container with:
```
sudo docker-compose up -d --restart=always
```

Now, you should be able to view your PhotoPrism at https://nextcloudpi.local:2342. If you ever need to restart your container, or you make changes to the config file, restart the container with:
```
sudo docker-compose stop
sudo docker-compose up -d
```

All you have to do is configure PhotoPrism settings to your liking, index your photos, and you'll be set! [This guide](https://docs.photoprism.app/user-guide/first-steps/) goes through indexing your photos.

## Setting up Cloudflare tunnels

```
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64.deb

sudo dpkg -i cloudflared-linux-arm64.deb

cloudflared tunnel create <tunnel name>

sudo nano .cloudflared/config.yml (paste in config from below)

cloudflared --config /home/admin/.cloudflared/config.yml service install
```