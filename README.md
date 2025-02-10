# 🌤 CuteWeatherApp

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## 📌 Overview
CuteWeatherApp is a beautifully designed iOS weather application that provides real-time weather updates. Built with Swift and UIKit, this app offers a user-friendly experience with engaging UI elements, making checking the weather a delightful experience.

## ✨ Features
- 🌦 Get real-time weather updates for any location
- 🔍 Search for weather information of any city worldwide
- 📊 Display key weather details like temperature, humidity, and wind speed
- 🎨 Simple and visually appealing UI

## 🛠️ Technologies Used
- **Swift**: Programming language for iOS development
- **UIKit**: Framework for building user interfaces
- **CoreLocation**: Fetching GPS-based location data
- **URLSession**: Making API requests to fetch weather data
- **Auto Layout**: Ensuring a responsive design across various devices

## 📸 Screenshots



## 🚀 Getting Started
### Prerequisites
- macOS with Xcode installed (latest version recommended)
- An API key from OpenWeatherMap (https://openweathermap.org/api)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/washind14/CuteWeatherApp.git
   ```
2. Open the project in Xcode:
   ```sh
   cd CuteWeatherApp
   open CuteWeatherApp.xcodeproj
   ```
3. Add your OpenWeatherMap API key in the project’s configuration file.
4. Build and run the app on a simulator or physical device.

## 🏗️ Project Structure
```
CuteWeatherApp/
├── Model/          # Data models
├── View/           # UI components
├── Controller/     # View controllers
├── Networking/     # API handling
├── Utilities/      # Helper functions and extensions
└── Resources/      # Assets and storyboards
```

## 🔥 API Usage
This app uses the OpenWeatherMap API to fetch real-time weather data:
- Base URL: `https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}`
- Supports fetching data by city name or GPS coordinates.


## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Made with ❤️ by [washind14](https://github.com/washind14)

