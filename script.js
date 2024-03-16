const API_URL = 'https://api.artic.edu/api/v1';
const ARTWORKS_URL = `${API_URL}/artworks`;
const EVENTS_URL = `${API_URL}/events`;

async function fetchList(url) {
  try {
    const response = await fetch(url);
    return await (await response.json()).data;
  } catch (error) {
    console.error(error);
  }
};

function appendArtworkList() {
  const ARTWORK_LIST = document.getElementById('artwork-list');

  fetchList(ARTWORKS_URL)
    .then((list) => {
      const ul = document.createElement("ul");

      list?.map(({ title, thumbnail, description }) => {
        const item = document.createElement("li");
        const header = document.createElement("h3");
        const wrapper = document.createElement("div");
        const img = document.createElement("img");
        const text = document.createElement("span");

        header.innerText = title;

        img.alt = title;
        img.src = thumbnail.lqip;

        text.innerHTML = description;
        
        wrapper.appendChild(img);
        wrapper.appendChild(text);
        
        item.appendChild(header);
        item.appendChild(wrapper);

        ul.appendChild(item);
      })

      ARTWORK_LIST.appendChild(ul);
    });
}

function appendEventsList () {
  const EVENT_LIST = document.getElementById('event-list');

  fetchList(EVENTS_URL)
    .then((list) => {
      const ul = document.createElement("ul");

      list?.map(({ title, image_url, location, short_description }) => {
        const item = document.createElement("li");
        const header = document.createElement("h3");
        const wrapper = document.createElement("div");
        const img = document.createElement("img");
        const description = document.createElement("span");
        const place = document.createElement("p");

        header.innerText = title;

        img.alt = title;
        img.src = image_url;

        place.innerText = `📍 ${location}`;

        description.innerHTML = short_description;
        
        wrapper.appendChild(img);
        wrapper.appendChild(description);
        wrapper.appendChild(place);
        
        item.appendChild(header);
        item.appendChild(wrapper);

        ul.appendChild(item);
      })

      EVENT_LIST.appendChild(ul);
    });
}

appendArtworkList();
appendEventsList();
