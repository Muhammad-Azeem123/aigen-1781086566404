document.addEventListener('DOMContentLoaded', () => {
    const dynamicInfoElement = document.getElementById('dynamic-info');

    function updateDynamicInfo() {
        const now = new Date();

        // Format time (e.g., 10:30:45 PM)
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        });

        // Format date (e.g., Monday, January 1, 2023)
        const dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        dynamicInfoElement.textContent = `Today is ${dateString} | Current time: ${timeString}`;
    }

    // Call once immediately to display info without delay
    updateDynamicInfo();

    // Update every second (1000 milliseconds)
    setInterval(updateDynamicInfo, 1000);
});