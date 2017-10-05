# Nantes Bike Map
A map for bikers, allowing them to have informations about meteo, pollution, meteo alerts and bike thefts in Nantes all in one page.

## Getting Started

You can get a copy of the project [here](https://github.com/Knudian/bicycle/).
Once his dependencies have been launched, you can run it.
See [Dependencies](#Dependencies) for further explanations of how to deploy this project.

See [Deployment notes](#Installing) for further explanations of how to deploy this project.

### Prerequisites

To deploy the project, you'll need:
- [NodeJs](https://nodejs.org/)

### Dependencies

To run this project, you need to run others projects too:

- [Bicycle Meteo](https://github.com/Knudian/bicycle_meteo/)
- [Bicycle Pollution](https://github.com/Knudian/bicycle_pollution/)
- [Bicycle Meteo Alerts](https://github.com/Knudian/bicycle_meteoAlerts/)
- [Bicycle Thefts](https://github.com/Knudian/bicycle_robbery/)
Each of those are micro-services deserving the main project with JSON infos

- [Bicycle Notifier](https://github.com/Knudian/bicycle_notifier/)
- [Bicycle Mailer](https://github.com/Knudian/bicycle_mq/)
Those projects notifies the users of the main project.

### Installing & running

```shell
npm install
npm start
```

It runs in your port 3000. Protect yourself !
The dependencies runs in differents ports:
- 3100: Meteo
- 3200: Pollution
- 3300: Meteo Alerts
- 3400: Thefts (*Robbery*)
- 8000: Notifier
- ????: Mail

## Built With

* [reactjs](https://reactjs.org/) - The SPA framework used
* [reactstrap](https://reactstrap.github.io) - Bootstrap 4 in React.
* [react-leaflet](https://github.com/PaulLeCam/react-leaflet) - LeafletJS for React.
* [leafletjs](http://leafletjs.com) - A Mapping library.
* [bootstrap](https://getbootstrap.com) - Useful CSS styling.

## Authors

* **Mr J.** - [Fubuke](https://github.com/Fubuke)   - *Side Developer, CSS* 
* **Mr K.** - [Knudian](https://github.com/Knudian) - *Main Development*
* **Mr R.** - [Aaol](https://github.com/Aaol)       - *Side Development, Mail*
* **Miss ♥** - [BigBoobies](https://www.meetic.fr)  - *Moral Support*

## License

This project is not licensed.

## Acknowledgments

* Thanks to [Loic Guillois](http://fitlab.fr) for the architecture lecture.
* Thanks to [Mr J's mum](http://orteil.dashnet.org/cookieclicker/) for her cookies.
* Thanks to [Gojira](http://www.gojira-music.com/), [LOL](https://go.twitch.tv/ogaminglol), and [9GAG](http://9gag.com) for their active support during the development.
