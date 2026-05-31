
            window.calcBmi = function() {
                const h = parseFloat(document.getElementById('bmi-h').value) / 100;
                const w = parseFloat(document.getElementById('bmi-w').value);
                const res = document.getElementById('bmi-res');
                if(!h || !w) return;
                const bmi = (w / (h*h)).toFixed(1);
                res.innerHTML = `BMI: <strong>${bmi}</strong>`;
            }
        