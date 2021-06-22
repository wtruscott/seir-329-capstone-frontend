# Project Overview

**PROJECT NAME:** Where House

**PROJECT AUTHOR:** Will Truscott

## Project Links

- [Github]
- [Deployed Site]

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This is an app for anyone with stuff. If you've got your stuff spread across multiple locations, if your got a  lot of stuff, if you just want your stuff more organized, this is for you. The app will allow the user to create a digital database that catalogs their belongings in a way that is easy to search through if you're looking for that one sweater that you put away last Winter and would rather not dig through 5 boxes to find it.

## Wireframes

- [Search and Homepage](https://res.cloudinary.com/dbmh779j0/image/upload/v1623440918/5E89AF6D-59DF-4469-AA7D-DDCB922F0DD6_zvfvbs.heic)
- [My House Page](https://res.cloudinary.com/dbmh779j0/image/upload/v1623440917/6F5AAB98-968D-4EFB-BDB5-76FFBFC069C6_zlm2u5.heic)
- [Travel and Collections Page](https://res.cloudinary.com/dbmh779j0/image/upload/v1623440917/E0770BE0-B1BE-4948-BFCD-F6986BEA298D_bpisvq.heic)

## Architecture

- [Architecture](https://res.cloudinary.com/dbmh779j0/image/upload/v1623441195/Screen_Shot_2021-06-11_at_3.17.39_PM_v5snmf.png)

## Time/Priority Matrix 

[Time Priority Matrix](https://res.cloudinary.com/dbmh779j0/image/upload/v1623440916/CF03B173-EE41-4B38-B119-47149479534C_qhar92.heic)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Project Deployment
- General layout, linking all pages together through React
- Functioning CRUD backend
- Rendering the data
- Creating and setting state 
- Creating a functioning Nav Bar
- Basic CSS and layout
- Simple responsive design
- Usable form that take in user input
- Using Python and Django for the backend


#### PostMVP 

- More complex Responsive design
- Images of each item can be uploaded by the user
- search form can yield results for items, containers, boxes, or places.
- Extra CSS styling 

## Functional Component


#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Deployment | H | .5hr | 1hr |
| Linking/ Layout | H | 2hrs | 4hr |
| Learning Python | H | 4hrs | 5hr |  
| Rendering the Data| H | 2hrs| 8hr+ | 
| Creating and setting State | H | 2hrs | 3hr |
| Learning Django | H | 4hrs| 20hrs+ | 
| Create Nav Bar and Header| M | 1hr | .5hr |
| Adding Basic CSS | H | 4hrs | 4hr |
| Responsive Mobile First Design| M | 3hrs| 2hr |
| Functioning CRUD backend| H | 4hrs| 10hr+ | 
| Form can take and store user input| H | 4hrs| 4hrs | 
| Total | H | 27.5hrs| 61.5+ hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Increase Complexity of Responsive Design| L | 2hrs | NA |
| Nav-Burger | M | 1hr | NA |
| Images can be uploaded by the user | L | 3hrs | NA |
| Search Form that is dynamic | H | 4hrs | NA |
| Bonus Styling | L | 4+hrs | NA |
| Total | M | 14hrs| NA |

## Additional Libraries



## Code Snippet

```

class ThingSearch(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset =Thing.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']

```
```
const getThings = async (searchterm) => {
        const response = await fetch(URL + 'api/search/?search=' + searchterm, {
            method: "get",
            headers: {
                Authorization: localStorage.getItem('access_token')
                ? 'JWT ' + localStorage.getItem('access_token')
                : null
            }
        })
        const data = await response.json()
        console.log(data)
        setThings(data)
    }

```
This is how Im able to query the database with only the first few letters of a word. If I type in "law" in the search bar and hit enter it will return the entries for "Law and Order: Box Set" and "Lawnmower" and "Lawn Chair"

## Issues and Resolutions

Issue: Attempting to do Authentication was an intersting process, however it caused a tidal wave of "UnAuthorized" errors due to the access tokens timing out

Solution: The solution to make this work would be to iron out the logic of how the front end handles tokens, and to be a bit more knowledgable on how to set up users in the back end. The I need to get this done solution was to make the database AllowAny permissions

Issue: Searching the data base: It is hard to search the url that the database auto generates, because the url is made with the new objects id# by default. You can get something by typing in api/things/3/ but it will be whatever has that id giving you no control. 

Solution: By creating a SlugField that autopopulated with the name value of each object I am able to generate a user friendly api. so now api/things/50lb-weights is an address in the API

Issue: I was only able to make the slugfield populate automatically from the api's admin route. so anything made on my livesite currently needs to have the slug manually entered... corretly!

Solution: given more time I could probably learn how to fix this oversite it is certainly doable.

Issue: in a similar vein to the above issue, my many to many fields populate their fields with the ID#s of the objects. this is not useful data to display to the user.

Solution: Again the real solution would be to learn more about how the many to many field works because there is definitely a way to populate the array with the Name values instead of the ID values. If I had a little extra time, i had also contemplated using logic on the front end that could pull the "Things" data and render the names based off their ID#s that the "Containers" "Places" and "Collections" generated. The answer is in the backend, but this might be a way to Brute Force the data.

Issue: I could not see my results for my search bar for a long time. Every consolelog i did returned the data, the Component had the data as a prop, but it was not rendering. I went through the fetch and submit code over and over looking for an issue.

Solution: trust your console logs. I was assuming the request code was wrong, but instead it turned out I had just mounted the component in a way that it was rendering behind other components. These things happen, but i guess the lesson is that sometimes the error is really simple.