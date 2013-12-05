(function () {

    xtag.register('nb-button', {
        extends: 'button',
        lifecycle: {
            created: function () {
                var tmpl = document.querySelector('template#button');
                var content = this.textContent;
                this.innerHTML = tmpl.innerHTML.replace('{{content}}', content);
            }
        },
        events: {
            'click': function () {
                xtag.fireEvent(this, 'nb-button_clicked');
            }
        },
        accessors: {
            content: {
                set: function (content) {
                    this.querySelector('.button-content').innerHTML = content;
                },
                get: function () {
                    return this.querySelector('.button-content').innerHTML;
                }

            },
            disabled: {
                attribute: {
                    boolean: true
                }
            }
        }
    });

    xtag.register('nb-input', {
        extends: 'input',
        lifecycle: {
            created: function () {
                var tmpl = document.querySelector('template#input');
                var placeholder = this.getAttribute('placeholder');
                var content = this.textContent;
                this.innerHTML = tmpl.innerHTML.replace('{{content}}', content).replace('{{placeholder}}', placeholder);
            }
        },
        events: {
            'click:delegate(.field-reset)': function () {
                this.parentNode.parentNode.reset();
            }
        },
        accessors: {
            placeholder: {
                attribute: {
                    selector: 'input[type=text]'
                }
            },
            disabled: {
                   attribute: {
                       selector: 'input[type=text]',
                       boolean: true
                   }

            },
            value: {
                set: function (value) {
                    this.querySelector('input[type=text]').value = value;
                },
                get: function () {
                    return this.querySelector('input[type=text]').value;
                }
            }
        },
        methods: {
            reset: function () {
                this.value = '';
                xtag.fireEvent(this, 'nb-input_reseted');
            }
        }
    });


    xtag.register('nb-input-group', {
        extends: 'input',
        lifecycle: {
            created: function () {
                this.button = this.querySelector('[is=nb-button]');
                this.input = this.querySelector('[is=nb-input]');
            }
        },
        events: {
            'nb-button_clicked': function () {
                this.send();
            }
        },
        accessors: {
            placeholder: {
                set: function (value) {
                    this.input.placeholder = value;
                }
            },
            disabled: {
                set: function (value) {
                    if (value) {
                        this.classList.add('is-disabled');
                        this.button.disabled = true;
                        this.input.disabled = true;
                    } else {
                        this.classList.remove('is-disabled');
                        this.button.disabled = false;
                        this.input.disabled = false;
                    }
                },
                get: function () {
                    return !!this.querySelector('input[type=text][disabled]');
                }
            },
            value: {
                set: function (value) {
                    this.input.value = value;
                },
                get: function () {
                    return this.input.value;
                }
            }
        },
        methods: {
            send: function () {
                console.log('Input-group result ', this.value);
            }
        }
    });
})();
