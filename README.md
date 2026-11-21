# 文章自動レイアウトWebApp - Text auto-Layout webApp

![japanese-auto-layout](https://github.com/user-attachments/assets/3bcc5734-635d-475e-98e6-37e0b6ef368f)

This project is a web application that automatically arranges Japanese text based on the concepts of stepwise and tiered line text layouts. The goal is to enhance the reading experience by optimizing eye movement and increasing reading speed without sacrificing comprehension. This method is based on research in improving Japanese text layout for more efficient reading, focusing on segmenting text at natural linguistic units (bunsetsu) and applying various visual strategies.

## Features

- **Automatic Text Layout**: Users can input Japanese text, which the system analyzes and formats according to a stepped and tiered layout style, designed to optimize reading flow.
- **Improved Reading Speed**: By aligning text at natural linguistic breaks and structuring text with an incremental indentation, the system supports reading speeds up to 1.6 times faster compared to conventional layouts.
- **Responsive Design**: The layout dynamically adjusts based on the screen size to provide an optimal reading experience on any device.

## How It Works

1. **Text Input**: Users input a block of Japanese text into the web application.
2. **Text Processing**: The app processes the text using morphological analysis to break it into meaningful units (bunsetsu) and applies the tiered layout logic.
3. **Dynamic Layout Generation**: The app dynamically applies CSS and JavaScript to display the text in a stepwise manner, with incremental indentation and other layout features designed to aid reading efficiency.
4. **User Experience**: The user reads the text with the improved layout, enjoying a smoother eye movement and faster reading experience.

## Key Technologies

- **Next.js 14(Approuter)**: Used to dynamically apply the tiered and stepped text layout in the browser.
- **Typescript**: A Javascript superset for types setting.
- **Kuromoji(Morphological Analysis)**: A Javascript library For analyzing and breaking down the Japanese text into bunsetsu.
- **SCSS**: Provides flexible text formatting and responsive design.
- **Shadcn/ui**: A well-designed components styled by tailwindCSS.
- **Vecel**: Frontend Cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized web.
- **GSAP**: (Optional) For additional text animations, if enabled.

## Research Background

This project is based on research in optimizing Japanese text layouts for electronic reading devices. Key findings show that by adjusting line breaks and text alignment based on natural linguistic units, such as bunsetsu, reading speeds can be significantly improved without compromising comprehension. 

The following research papers were instrumental in the development of this project:

- Kobayashi, J. "Development of Japanese Text Layout System for Improving Reading Speed".
- Kobayashi, J. "Stepped and Tiered Line Text Layout for Improving Reading Rate in Japanese Electronic Text Readers".
- Kobayashi, J. "Designing Japanese Text Layout for Efficient Reading".

## Installation

To run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ManatoYamashita/text-layout-app.git
   cd text-layout-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

![usage](https://github.com/user-attachments/assets/1dbec7bc-8930-45df-b1db-35ce84e6215c)

1. Input your Japanese text in the text box.
2. Press the "送信(Command + Enter)" button or press Command+Enter key for macOS, Ctrl+Enter for WindowsOS.
3. The text will be displayed in the optimized stepped layout format with animation.

## Future Work

- Add support for various customization options (e.g., font size, color schemes).
- Incorporate support for right-to-left text layout for vertical Japanese text reading.
- Enable user-driven layout adjustments such as background color or line spacing.

## License

This project is licensed under the MIT License.

![how-it-works](https://github.com/user-attachments/assets/481a813a-828a-4386-bf00-2043702ba556)
