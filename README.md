# Living Cost Website 

The Living Cost website is a versatile tool designed for comparing the cost of living across different cities. This platform offers users insights into the average expenses of various products in two chosen cities, alongside high-level country information, all presented on an interactive map. Whether you're a budget-conscious traveler, an inquisitive explorer, or just someone intrigued by global city costs, this website caters to your curiosity.

## Development Methodology
The Living Cost website was developed using the agile methodology, which emphasizes incremental feature implementation while maintaining testability and functionality at every stage. This approach facilitates effective collaboration and stakeholder management. As a coursework deliverable, our project aimed to enhance student learning. Agile provided us with consistent feedback opportunities, enabling us to identify skill gaps and enhance our capabilities. By aligning our development with agile principles, we optimized our learning curve and confidence, leading to a high-quality final product. Research confirms that when properly executed, the agile methodology boosts learners' confidence in academic projects (Romeike & Göttel, 2012). Throughout the process, we gained proficiency in React, the primary web technology employed, as we implemented each required feature.

## Accessing External Data
To ensure the Living Cost website remains dynamic and up-to-date, we integrated essential APIs to deliver cost of living data, country facts, and contact submission functionality. Leveraging the fetch function, we made HTTP requests, including the API key in headers and parsing response data in JSON format.

The API response provides a status code indicating success or specific errors. We addressed status code 429, indicating API call limits exceeded, for this project (Figure 1). For future enhancements, implementing broader error handling, including API downtime or bad requests, will enhance system robustness.

The fetch function returns a Promise object, enabling asynchronous request handling without blocking UI interaction. JavaScript's Promise facilitates responses in different states (pending, fulfilled, or rejected). Successful data retrieval involves extracting and displaying JSON data.

## Dynamic Data Display
With API-fetched data at hand, effective presentation to users became paramount. We capitalized on React, the chosen frontend framework, to deliver a dynamic, user-friendly interface. ReactJS excels in building intricate, interactive user interfaces by shifting focus from direct DOM management to state change management, expecting corresponding DOM changes.

React's virtual DOM abstraction optimizes rendering, enhancing efficiency and responsiveness. Utilizing React's strengths, we seamlessly showcased API data to users.

## Alternative Data Display Approaches
Abstraction's value in computer science is undeniable; frameworks and libraries offer simplified object manipulation. While direct DOM manipulation is feasible, it's intricate. React, unlike alternatives like jQuery, Angular, Vue, etc., abstracts this complexity. React prioritizes state change management with a virtual DOM reflecting these changes.

Comparing React with alternatives, its extensive community, relatively swift performance, and user-friendliness stand out. For learners, React introduction empowers modern web development skills, aligned with functional programming paradigms.

React's lightweight, customizable approach contrasts with Angular's comprehensiveness, delivering efficiency and performance in displaying API data, aligning with our project's goals.

## Bespoke vs. Framework-based Interface Design
Our bespoke approach, typical in academic settings, prioritizes learning over professional business value. Bespoke advantages include feature control, unrestricted by CMS capabilities, like WordPress. However, it demands more time and finances, while CMS solutions reduce development costs and are better stabilized.

For our limited-scope project, the bespoke approach's flexibility was pivotal. Despite potential higher expenses, its tailored solutions fit our needs precisely. While CMS security concerns might not be significant for user data, platform vulnerabilities pose risks.

## Acknowledgments
This Living Cost website was developed as a project for educational purposes, aiming to enhance our skills and understanding of modern web development. We hope it proves insightful and serves as a testament to the power of agile methodologies, dynamic data integration, and thoughtful user interface design.

## Citation 

Romeike, R. & G ottel, T. 2012, "Agile Projects in High School Computing Education: Emphasizing a Learners' Perspective", Proceedings of the 7th Workshop in Primary and Secondary Computing EducationAssociation for Computing Machinery, New York, NY, USA. 

Saks, E. 2019, "JavaScript Frameworks: Angular vs React vs Vue." .

# Demo

![living-cost](https://github.com/Emmastro/living-cost/assets/40155399/b2d22aa1-df3f-4e25-a69a-7f86498b090c)

# Wireframes

## Low fidelity Wireframe 

![wireframe-1](https://github.com/Emmastro/living-cost/assets/40155399/e4a041f6-2ee3-43c0-8732-37890a845c44)

## High Fidelity Wireframes


![1](https://github.com/Emmastro/living-cost/assets/40155399/16c0281b-70b2-4d17-9f90-909002e1ad37)

![2](https://github.com/Emmastro/living-cost/assets/40155399/01ad81d7-af92-4ae3-907b-12b22f974bcc)

![3](https://github.com/Emmastro/living-cost/assets/40155399/02393b95-2ef8-4cc2-bc45-37a046471e5a)

![4](https://github.com/Emmastro/living-cost/assets/40155399/6c3cd923-44ec-4e13-86d9-f18c9d7e07ca)

# User journey map

![5](https://github.com/Emmastro/living-cost/assets/40155399/b5da4052-8635-4f0d-8071-44fc0575a31c)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
git config --add --local core.sshCommand 'ssh -i ~/.ssh/id_rsa.pub'
