#!/usr/bin/env bash
#
# update_posts.sh
# KuoE0 <kuoe0.tw@gmail.com>
# Copyright (C) 2016
#
# Distributed under terms of the MIT license.
#

git submodule foreach git pull origin master -f
