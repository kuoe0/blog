#! /bin/bash
#
# run.sh
# Copyright (C) 2015 KuoE0 <kuoe0.tw@gmail.com>
#
# Distributed under terms of the MIT license.
#

SED="sed"
if which gsed &> /dev/null; then
  SED="gsed"
fi
$SED -i "s/kuoe0.github.io/127.0.0.1:4000/" ./_config.yml
bundle exec jekyll serve --watch --baseurl ""


