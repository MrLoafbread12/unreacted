    // src/app.ts
    import { createElement, useState, renderComponent } from './index'; // Import from your library's entry point

    // Define a simple counter component
    function CounterComponent() {
      const [count, setCount] = useState(0);

      console.log('Rendering CounterComponent, count:', count); // For debugging

      return createElement(
        'div',
        {}, // Props for the div
        createElement('h1', {}, `Count: ${count}`),
        createElement(
          'button',
          {
            // Add an event listener using the 'on' prefix
            onclick: () => {
                console.log('Increment button clicked!');
                setCount(count + 1);
            }
          },
          'Increment'
        ),
        // Add the Decrement button
        createElement(
            'button',
            {
              onclick: () => {
                console.log('Decrement button clicked!');
                setCount(count - 1);
              },
              style: { marginLeft: '5px' } // Add some spacing
            },
            'Decrement'
          )
      );
    }

    // Get the root element from the HTML
    const container = document.getElementById('root');

    if (container) {
      // Render the component into the container
      renderComponent(CounterComponent, container);
    } else {
      console.error('Root container not found!');
    }