---
layout: post
title:  "Syntax Highlight for Source Code"
date:   2016-04-15
tags:   ["syntax highlight"]
feature:
    photo: false
---

Use the following format for your source code:

    ```c++
    
    Your source code here.
    
    ```

You can specify which language it is after the triple <code>`</code> symbols.

## C++ Example

```c++
#include <iostream>
int main()
{
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```

## Python Example

```python
import unittest
def median(pool):
    copy = sorted(pool)
    size = len(copy)
    if size % 2 == 1:
        return copy[(size - 1) / 2]
    else:
        return (copy[size/2 - 1] + copy[size/2]) / 2
class TestMedian(unittest.TestCase):
    def testMedian(self):
        self.failUnlessEqual(median([2, 9, 9, 7, 9, 2, 4, 5, 8]), 7)
if __name__ == '__main__':
    unittest.main()
```

## Ruby Example

```ruby
# Get the parts of speech.
print "Please enter a past-tense verb: "
verb = gets.chomp
print "Please enter a noun: "
noun = gets.chomp
print "Please enter a proper noun: "
prop_noun = gets.chomp
print "Please enter a an adverb: "
adv = gets.chomp

# See where to put it.
print "Please enter a file name: "
fn = gets.chomp
handle = open(fn,"w")

# Go.
printf(handle, "%s got a %s and\n%s %s around the block.\n",
        prop_noun, noun, verb, adv)
handle.close
```

## Javascript Example

```javascript
var visits = getCookie("counter");

if (visits) {
     visits = parseInt(visits) + 1;
     document.write("By the way, you have been here "+ visits +" times.");
}
else {
     visits = 1;
     document.write("By the way, this is your first time here.");
}

setCookie("counter", visits);
```
