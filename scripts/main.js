const pets = [
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Rocco',
        location: 'jeddah sa',
        image: 'images/pet-01.png',
        story: {
            title: 'Rocco saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-01.png'
        }
    },
    {
        type: 'Cat',
        gender: 'Male',
        age: 'Young',
        name: 'Chanona',
        location: 'jeddah sa',
        image: 'images/pet-02.png',
        story: {
            title: 'Chanona saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-02.png'
        }
    },
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Morio',
        location: 'jeddah sa',
        image: 'images/pet-03.png',
        story: {
            title: 'Morio saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-03.png'
        }
    },
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Danio',
        location: 'jeddah sa',
        image: 'images/pet-04.png',
        story: {
            title: 'Danio saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-04.png'
        }
    },
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Rocco',
        location: 'riyadh sa',
        image: 'images/pet-01.png',
        story: {
            title: 'Rocco saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-01.png'
        }
    },
    {
        type: 'Cat',
        gender: 'Male',
        age: 'Young',
        name: 'Chanona',
        location: 'riyadh sa',
        image: 'images/pet-02.png',
        story: {
            title: 'Chanona saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-02.png'
        }
    },
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Morio',
        location: 'riyadh sa',
        image: 'images/pet-03.png',
        story: {
            title: 'Morio saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-03.png'
        }
    },
    {
        type: 'Dog',
        gender: 'Male',
        age: 'Young',
        name: 'Danio',
        location: 'riyadh sa',
        image: 'images/pet-04.png',
        story: {
            title: 'Danio saving story',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis orci. Pellentesque cursus luctus mauris eu mattis. Fusce sit amet feugiat arcu. Proin pulvinar, elit a tincidunt pharetra, risus odio varius nibh, et fringilla arcu erat ut odio. Vestibulum at ullamcorper purus. Mauris magna ipsum, tristique ac volutpat ornare, iaculis eu arcu. Nunc id odio eleifend, molestie nibh porttitor, mollis nibh. Sed vitae orci et urna ultricies semper',
            image: 'images/pet-04.png'
        }
    },
]

document.querySelector('.search-btn').addEventListener('click', showitem);

function showitem(event) {
    event.preventDefault();
    let search = document.querySelector('#search').value.toLowerCase();
    pets.forEach(pet => {      
        let petLocation = pet.location;  
        if (petLocation.includes(search)) {  
            let widget = document.createElement('div');
            widget.className = 'widget';
        
            let widgetImage = document.createElement('div');
            widgetImage.className = 'widget__image';
            widget.appendChild(widgetImage);
            
            let img = document.createElement('img');
            img.setAttribute('src', `${pet.image}`);
            img.setAttribute('alt', 'Pet');
            widgetImage.appendChild(img);
        
            let widgetDesc = document.createElement('div');
            widgetDesc.className = 'widget__desc';
            widget.appendChild(widgetDesc);
        
            let title = document.createElement('h4');
            title.className = 'name';
            title.textContent = `${pet.name}`;
            widgetDesc.appendChild(title);
            
            let detail = document.createElement('p');
            detail.className = 'detail';
            detail.textContent = `${pet.age} | ${pet.gender}`;
            widgetDesc.appendChild(detail);
            
            let location = document.createElement('p');
            location.className = 'location';
            location.textContent = `${pet.location}`;
            widgetDesc.appendChild(location);

            let btn = document.createElement('button');
            btn.innerHTML = 'Rescue story';
            btn.className = 'rescue-btn';
            btn.addEventListener ("click", function() {
                swal({
                    title: `${pet.story.title}`,
                    text:  `${pet.story.detail}`,
                    icon:  `${pet.story.image}`,
                });
            });
            widgetDesc.appendChild(btn);
        
            document.querySelector('.widgets').appendChild(widget);
        }
    });
}
