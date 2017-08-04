#!/usr/bin/env bash

# Variables
#VARIABLE=VALUE


echo -e "\n--- Mkay, installing now... ---\n"

echo -e "\n--- Updating packages list ---\n"

apt-get -qq update > /dev/null 2>&1
#apt-get -y upgrade > /dev/null 2>&1

echo -e "\n--- Installing node ---\n"
apt-get -y install nodejs-legacy npm > /dev/null 2>&1
chown -R vagrant /home/vagrant/.npm > /dev/null 2>&1

echo -e "\n--- done ---\n"
