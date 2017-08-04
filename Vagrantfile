# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  config.vm.box = "bento/ubuntu-17.04"

  config.vm.box_check_update = false

  config.vm.network "private_network", ip: "192.168.57.102"

  config.vm.synced_folder "./", "/home/vagrant/jsgis"

  config.vm.provider "virtualbox" do |v|
    cpus = 2
    mem = 1024

    v.customize ["modifyvm", :id, "--memory", mem]
    v.customize ["modifyvm", :id, "--cpus", cpus]
  end

  config.vm.provision :shell, path: "Vagrantbootstrap.sh"
end
