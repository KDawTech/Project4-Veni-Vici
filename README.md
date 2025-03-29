# Web Development Project 4 - Veni Vici

Submitted by: **Kevon Dawkins**

This web app: Allows users to discover random cats with breed info using The Cat API, and lets users ban unwanted attributes from future discoveries. The app also keeps track of previously seen cats.

Time spent: **13** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (origin, weight, and lifespan)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time
  - Displayed attributes match the displayed image
  - There is at least one image per API call
- [x] **API call response results appear random to the user**
  - Clicking on the API call button generates a seemingly random new result each time
  - Repeat results are possible but not frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Clicking on a clickable attribute not on the ban list immediately adds it to the ban list
  - Clicking on an attribute in the ban list immediately removes it from the ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking the Discover button will never show results containing banned attributes
  - _Recording will demonstrate adding/removing attributes correctly_

## Optional Features

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed results from this session
  - A dedicated section of the application displays all previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

## Additional Features

- [x] Custom minimalist UI design (teal + soft gray theme)
- [x] Responsive image sizes to avoid oversized images
- [x] Smooth button hover effects
- [x] Rounded corners for all cards and buttons

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/KDawTech/Project4-Veni-Vici/blob/main/Veni%20Vici.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />



## Notes

Challenges:
- Avoiding repeated API results when too many ban list items are added
- Making sure the image sizes stay clean and responsive
- Styling the history to fit under the main card in a vertical layout
- didn't get to do the stretch challenge as I have trouble implementing the history design and production

## License

    Copyright 2025 Kevon Dawkins

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
