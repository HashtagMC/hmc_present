# hmc_present
*hmc_present* provides a simple option to realise primitive presentations that consist of nothing but a single HTML-File. The advantages over conventional presentation software are obvious.
**Advantages:**
+ no dedicated file format - every computer that has a modern web browser installed can run the HTML-based presentations
+ smallest possible disk space - since HTML files consist of nothing but text, they only take up a few Kilobyte (included pictures take up extra space), while dedicated presentation software often takes up Gigabytes of disk space
+ given advanced HTML skills, the presentation can be expanded to incorporate all features HTML, CSS and JavaScript provide, all the while maintaining the presentation functionality

**Disadvantages:**
+ without intermediate knowledge of HTML, only very basic presentations can be made
+ mistakes that might occur have to be fixed by the author of the presentation, as the HTML file represents both the presentation and the algorithm running the presentation

## Structure of hmc_present

The core components of *hmc_present* are those:
+ a div that serves as canvas for the page of the presentation being shown
+ hidden divs that contain the actual pages of the presentation
+ a small script showing the current page and enabling the user to switch between pages using the arrow keys [←] + [→]

## Creating presentations

Each page of the presentation has the following structure:

`<div class="content" id="content_[number of page, 0-?]">
Actual page content goes here...
</div>`

The first page, (`id="content_0"`) is automatically presented upon opening the file. The number of possible pages not limited, and the order in which the pages are written into the code does *not* matter.

As seen in the provided example, [impress.htm](https://github.com/HashtagMC/hmc_present/blob/master/impress.htm) (which may be modified to create presentations), the only requirements are a `<div id="presentation"></div>`, at least one page, and the actual script (included in the example or as a [separate file](https://github.com/HashtagMC/hmc_present/blob/master/hmc_present.js)). The pages may contain any HTML elements.

## Requirements

+ The only requirement to run hmc_present is a computer with any web browser able to interpret JavaScript.
