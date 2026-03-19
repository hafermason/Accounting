        function showModule(moduleId) {
            // Hide all modules
            document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
            // Remove active from all tabs
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            
            // Show selected module
            document.getElementById(moduleId).classList.add('active');
            // Highlight selected tab
            event.target.classList.add('active');
        }
        
        function toggleAnswer(btn) {
            const answer = btn.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                btn.textContent = 'Show Answer';
            } else {
                answer.style.display = 'block';
                btn.textContent = 'Hide Answer';
            }
        }
