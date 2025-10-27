# galaxy_midterm2
Web Design Second Midterm: Galaxy

We are using port 3000

Also though, some of the images do not load because it is an api of an api and the images are sandboxed and the browser prevents them from loading.

# ai_usage

AI greatly aided me in organizing my bootstrap and css styling sheets. It also helped me to identify errors and incongruencies in my code, such as that I can't load a favicon.ico into my website's icon, and that I needed to use a .png o .jpeg. 

An example of one of the prompts I used is:  "what can i add to my info column so that its height is always static and doesnt change?"

ChatGPT gave me this response: 
        .card .info-column {
        height: 500px; /* adjust to whatever you need */
        overflow-y: auto; /* scroll if content exceeds height */
        }


Another prompt that I used was: "now how do i make it so that the images shrink to fit the fixed height and width"

ChaptGPT gave me this reponse: 

# Explanation

        max-width: 100% → the image will never be wider than the container.

        max-height: 100% → the image will never be taller than the container.

        object-fit: contain → preserves the image’s aspect ratio, scaling it down if needed.

        overflow: hidden → optional; prevents the image from spilling outside the container.

        display: flex + justify-content + align-items → centers the image inside the container.