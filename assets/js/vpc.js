function VPC(){
    this.timepointer = 0;
    this.element;
    this.card_header;
    this.card_text;
    this.letter = [];
    this.typed = null;

    this.generate_letter_array = function(){
        var split_card_text = this.card_text.split('**');

        for(var i = 0; i < split_card_text.length; i++){
            if(i % 2 == 1){
                this.letter.push([split_card_text[i], '']);
            } else {
                this.letter.push([split_card_text[i]]);
            }
        }
        console.log(this.letter);
    };

    this.hide_cursor = function(){
        var $elements = document.querySelectorAll('.typed-cursor');
        if($elements){
            for(var i = 0; i < $elements.length; i++){
                $elements[i].style.display = 'none';
            }
        }
    };

    this.write = function(_element, _strings){
        this.hide_cursor();

        var self = this;
        this.typed = new Typed(_element, {
            strings: _strings,
            onComplete: function(){
                self.timepointer++;
                self.timeline();
            },
            contentType: null,
            autoInsertCss: false,
            //between 60 and 80
            typeSpeed: Math.floor(Math.random() * 70) + 50,
            backSpeed: Math.floor(Math.random() * 70) + 50
        });
    };

    this.timeline = function(){
        if(!this.letter[this.timepointer]){
            this.custom();
            return;
        }

        var $span = document.createElement('span');
        // $(this.element).append('<span></span>');
        document.querySelector(this.element).appendChild($span);
        this.write(document.querySelector(this.element+' span:last-child'), this.letter[this.timepointer]);
    };

    this.custom = function(){
        this.hide_cursor();
    };
}