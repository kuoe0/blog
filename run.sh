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
$SED -i "s/kuoe0.github.io/0.0.0.0:4000/" ./_config.yml
jekyll server --baseurl ""


