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

### Installing

```shell
npm install
```

It runs in your port 3000. Protect yourself !


## Built With

* [React](https://reactjs.org/) - The web framework used
* [React Strap](https://reactstrap.github.io) - Dependency Management

## Versioning

We use [GitHub](http://github.com/) for versioning. 
For the versions available, see the [tags on this repository](https://github.com/bicycle/tags). 

## Authors

* **Mr J.** - [Fubuke](https://github.com/Fubuke)   - *Side Developer, CSS* 
* **Mr K.** - [Knudian](https://github.com/Knudian) - *Main Development*
* **Mr R.** - [Aaol](https://github.com/Aaol)       - *Side Development, Mail*
* **Miss ♥** - [BigBoobies](https://thatsnotanadress.com) - *Moral Support*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is not licensed.

## Acknowledgments

* Thanks to [Loic Guillois](http://fitlab.fr) for the architecture lecture.
* Thanks to [Mr J's mum](http://orteil.dashnet.org/cookieclicker/) for her cookies.
