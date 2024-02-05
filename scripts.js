        var input = document.getElementById('display');
        var last = document.getElementById('last');
        var inputValue;
        var latestCharacter;
        var decimalTracker = 0;

        function appendToDisplay(value) {
            if(/^[0-9]$/.test(value)){
                input.value += value;
            }
            else if(/^[+\-*/.]$/.test(value)){
                if(input.value != ""){
                    if(/^[+\-*/.]$/.test(input.value[input.value.length - 1])){
                        input.value = input.value.slice(0, -1);
                    }
                    input.value += value;
                }
            }
            document.activeElement.blur();
        }

        function backspace(){
            input.value = input.value.slice(0, -1);
        }

        function clearDisplay() {
            input.value = '';
        }

        function calculate() {
            if(/^[+\-*/.]$/.test(input.value[input.value.length - 1])){
                
            }
            else{
                try {
                    input.value = eval(document.getElementById('display').value);
                } catch (error) {

                }
            }
        }

        document.getElementById('display').addEventListener('input', function(event){
            inputValue = input.value;
            latestCharacter = inputValue.charAt(inputValue.length - 1);
            last.value = latestCharacter;
        });
        
        document.addEventListener('keydown', function(event) {
            if(/^[0-9+\-*/.]$/.test(event.key)){
                appendToDisplay(event.key);
            }
            else if(event.key === 'Enter'){
                calculate();
            }
            else if(event.key === 'Backspace'){
                backspace();
            }
        });