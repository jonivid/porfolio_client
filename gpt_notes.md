To achieve the welcome animation you described, where the text is animated to appear letter by letter from left to right and then undergoes a border-like effect, you can use a combination of CSS animations and possibly JavaScript for timing and more complex sequences. Here's a step-by-step breakdown of how this effect might be accomplished:

### 1. **Text Typing Effect (Letter by Letter)**
This effect can be created using pure CSS with keyframe animations or JavaScript for more control. The idea is to animate the width or opacity of each character over time.

#### CSS-only Approach:
```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}

.welcome-text {
  font-family: 'Montserrat-Regular';
  font-size: 2rem;
  color: white;
  overflow: hidden;
  border-right: .15em solid white; /* The blinking cursor effect */
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 3s steps(30, end),
    blink-caret .75s step-end infinite;
}
```

```html
<div class="welcome-text">Welcome</div>
```

- **Explanation**:
  - **`typing` keyframe**: Animates the width from 0 to 100%, creating a typing effect.
  - **`blink-caret` keyframe**: Creates a blinking cursor effect.
  - **`steps(30, end)`**: Ensures the animation occurs in discrete steps, simulating typing.

### 2. **Adding the Border-like Effect**
After the typing effect, you can animate the border or outline of the text to give it a border effect.

#### CSS Example:
```css
@keyframes border-appear {
  0% {
    text-shadow: none;
    color: white;
  }
  100% {
    text-shadow:
      1px 1px 0 #fff,
      -1px -1px 0 #fff,
      1px -1px 0 #fff,
      -1px 1px 0 #fff;
    color: transparent;
  }
}

.welcome-text.border-effect {
  animation: border-appear 2s forwards;
}
```

- **Explanation**:
  - **`text-shadow`**: Creates a shadow effect around the text, simulating a border.
  - **`color: transparent`**: Makes the text color transparent while the border remains visible.

### 3. **JavaScript for Sequence Control**
To control the timing and sequence (e.g., starting the border effect after the typing finishes), you can use JavaScript.

#### JavaScript Example:
```javascript
document.addEventListener("DOMContentLoaded", function() {
  const welcomeText = document.querySelector('.welcome-text');
  
  setTimeout(() => {
    welcomeText.classList.add('border-effect');
  }, 3000); // Time it to start after typing animation (3 seconds in this case)
});
```

- **Explanation**:
  - **`setTimeout`**: Delays the start of the border effect until after the typing animation is complete.

### 4. **Putting it All Together**
Here’s how your HTML might look with everything combined:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Animation</title>
  <style>
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: white; }
    }

    @keyframes border-appear {
      0% {
        text-shadow: none;
        color: white;
      }
      100% {
        text-shadow:
          1px 1px 0 #fff,
          -1px -1px 0 #fff,
          1px -1px 0 #fff,
          -1px 1px 0 #fff;
        color: transparent;
      }
    }

    .welcome-text {
      font-family: 'Montserrat-Regular';
      font-size: 2rem;
      color: white;
      overflow: hidden;
      border-right: .15em solid white;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: .15em;
      animation:
        typing 3s steps(30, end),
        blink-caret .75s step-end infinite;
    }

    .welcome-text.border-effect {
      animation: border-appear 2s forwards;
      border-right: none; /* Remove the blinking cursor */
    }
  </style>
</head>
<body>
  <div class="welcome-text">Welcome</div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const welcomeText = document.querySelector('.welcome-text');
      
      setTimeout(() => {
        welcomeText.classList.add('border-effect');
      }, 3000); // Trigger border effect after typing
    });
  </script>
</body>
</html>
```

### Final Notes:
- **Browser Compatibility**: Ensure the animations work across different browsers. Test with prefixes if needed.
- **Performance**: For complex animations, consider optimizing your code to ensure smooth performance.
- **Advanced Animations**: For more advanced effects, you can use libraries like GSAP or `anime.js`, which offer more control and additional animation features.

This approach gives you a clear, replicable way to achieve a similar welcome animation as described. If you need further customization or encounter any issues, feel free to ask!