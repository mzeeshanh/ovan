if(document.getElementsByClassName('tiny-one-item').length > 0) {
    var slider = tns({
        container: '.tiny-one-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
    });
};

if(document.getElementsByClassName('tiny-single-item').length > 0) {
    var slider = tns({
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    });
};

if(document.getElementsByClassName('tiny-three-item-icon').length > 0) {
    var slider = tns({
        container: '.tiny-three-item-icon',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-four-item-icon').length > 0) {
    var slider = tns({
        container: '.tiny-four-item-icon',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 4
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-five-item-icon').length > 0) {
    var slider = tns({
        container: '.tiny-five-item-icon',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
    });
};

if(document.getElementsByClassName('tiny-ten-item').length > 0) {
    var slider = tns({
        container: '.tiny-ten-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line "></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 10
            },

            992: {
                items: 8
            },

            767: {
                items: 6
            },

            320: {
                items: 2
            },
        },
    });
};

if(document.getElementsByClassName('tiny-twelve-item').length > 0) {
    var slider = tns({
        container: '.tiny-twelve-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="ri-arrow-left-s-line "></i>', '<i class="ri-arrow-right-s-line"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 12
            },

            992: {
                items: 8
            },

            767: {
                items: 6
            },

            320: {
                items: 2
            },
        },
    });
};

try {
    const counter = document.querySelectorAll('.counter-value');
    const speed = 2500; 

    counter.forEach(counter_value => {
        const updateCount = () => {
            const target = +counter_value.getAttribute('data-target');
            const count = +counter_value.innerText;

            var inc = target / speed;

            if (inc < 1) {
                inc = 1;
            }

            if (count < target) {
                counter_value.innerText = (count + inc).toFixed(0);
                setTimeout(updateCount, 1);
            } else {
                counter_value.innerText = target;
            }
        };

        updateCount();
    });
} catch (err) {

}



try {
    const tobii = new Tobii()
} catch (err) {

}

try {
    var Shuffle = window.Shuffle;

    class Demo {
        constructor(element) {
            if(element){
                this.element = element;
                this.shuffle = new Shuffle(element, {
                    itemSelector: '.picture-item',
                    sizer: element.querySelector('.my-sizer-element'),
                });

                this.addShuffleEventListeners();
                this._activeFilters = [];
                this.addFilterButtons();
            }
        }

        addShuffleEventListeners() {
            this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
                console.log('layout. data:', data);
            });
            this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
                console.log('removed. data:', data);
            });
        }

        addFilterButtons() {
            const options = document.querySelector('.filter-options');
            if (!options) {
                return;
            }

            const filterButtons = Array.from(options.children);
            const onClick = this._handleFilterClick.bind(this);
            filterButtons.forEach((button) => {
                button.addEventListener('click', onClick, false);
            });
        }

        _handleFilterClick(evt) {
            const btn = evt.currentTarget;
            const isActive = btn.classList.contains('active');
            const btnGroup = btn.getAttribute('data-group');

            this._removeActiveClassFromChildren(btn.parentNode);

            let filterGroup;
            if (isActive) {
                btn.classList.remove('active');
                filterGroup = Shuffle.ALL_ITEMS;
            } else {
                btn.classList.add('active');
                filterGroup = btnGroup;
            }

            this.shuffle.filter(filterGroup);
        }

        _removeActiveClassFromChildren(parent) {
            const { children } = parent;
            for (let i = children.length - 1; i >= 0; i--) {
                children[i].classList.remove('active');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        window.demo = new Demo(document.getElementById('grid'));
    });
} catch (err) {

}

document.getElementsByClassName("back-button")[0]?.addEventListener("click", (e)=>{
    if (document.referrer !== "") {
        e.preventDefault();
        window.location.href = document.referrer;
      }
})

try {
    const Default = {
        alwaysOpen: false,
        activeClasses: 'bg-gray-50 dark:bg-slate-800 text-primary',
        inactiveClasses: 'text-dark dark:text-white',
        onOpen: () => { },
        onClose: () => { },
        onToggle: () => { }
    }
    
    class Accordion {
        constructor(items = [], options = {}) {
            this._items = items
            this._options = { ...Default, ...options }
            this._init()
        }
    
        _init() {
            if (this._items.length) {
                this._items.map(item => {
    
                    if (item.active) {
                        this.open(item.id)
                    }
    
                    item.triggerEl.addEventListener('click', () => {
                        this.toggle(item.id)
                    })
                })
            }
        }
    
        getItem(id) {
            return this._items.filter(item => item.id === id)[0]
        }
    
        open(id) {
            const item = this.getItem(id)
    
            if (!this._options.alwaysOpen) {
                this._items.map(i => {
                    if (i !== item) {
                        i.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
                        i.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
                        i.targetEl.classList.add('hidden')
                        i.triggerEl.setAttribute('aria-expanded', false)
                        i.active = false
    
                        if (i.iconEl) {
                            i.iconEl.classList.remove('rotate-180')
                        }
                    }
                })
            }
    
            item.triggerEl.classList.add(...this._options.activeClasses.split(" "))
            item.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "))
            item.triggerEl.setAttribute('aria-expanded', true)
            item.targetEl.classList.remove('hidden')
            item.active = true
    
            if (item.iconEl) {
                item.iconEl.classList.add('rotate-180')
            }
    
            this._options.onOpen(this, item)
        }
    
        toggle(id) {
            const item = this.getItem(id)
    
            if (item.active) {
                this.close(id)
            } else {
                this.open(id)
            }
    
            this._options.onToggle(this, item)
        }
    
        close(id) {
            const item = this.getItem(id)
    
            item.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
            item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
            item.targetEl.classList.add('hidden')
            item.triggerEl.setAttribute('aria-expanded', false)
            item.active = false
    
            if (item.iconEl) {
                item.iconEl.classList.remove('rotate-180')
            }
    
            this._options.onClose(this, item)
        }
    
    }
    
    window.Accordion = Accordion;
    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-accordion]').forEach(accordionEl => {
    
            const alwaysOpen = accordionEl.getAttribute('data-accordion')
            const activeClasses = accordionEl.getAttribute('data-active-classes')
            const inactiveClasses = accordionEl.getAttribute('data-inactive-classes')
    
            const items = []
            accordionEl.querySelectorAll('[data-accordion-target]').forEach(el => {
                const item = {
                    id: el.getAttribute('data-accordion-target'),
                    triggerEl: el,
                    targetEl: document.querySelector(el.getAttribute('data-accordion-target')),
                    iconEl: el.querySelector('[data-accordion-icon]'),
                    active: el.getAttribute('aria-expanded') === 'true' ? true : false
                }
                items.push(item)
            })
    
            new Accordion(items, {
                alwaysOpen: alwaysOpen === 'open' ? true : false,
                activeClasses: activeClasses ? activeClasses : Default.activeClasses,
                inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
            })
        })
    })
} catch (error) {
    
}

try {
    if(document.getElementById("maintenance")){
        var seconds = 3599;
        function secondPassed() {
            var minutes = Math.round((seconds - 30) / 60);
            var remainingSeconds = seconds % 60;
            if (remainingSeconds < 10) {
                remainingSeconds = "0" + remainingSeconds;
            }
            document.getElementById('maintenance').innerHTML = minutes + ":" + remainingSeconds;
            if (seconds == 0) {
                clearInterval(countdownTimer);
                document.getElementById('maintenance').innerHTML = "Buzz Buzz";
            } else {
                seconds--;
            }
        }
        var countdownTimer = setInterval('secondPassed()', 1000);
    }
} catch (err) {

}


try {
    class Countdown {
        initCountDown() {
            const countdownElement = document.getElementById("countdown");
            const endMessageElement = document.getElementById("end-message");
    
            if (countdownElement) {
               
                const targetDate = countdownElement.getAttribute("data-countdown-date");
    
                if (!targetDate) {
                    console.error("Countdown date is not set in the HTML.");
                    return;
                }
    
                const eventCountDown = new Date(targetDate).getTime();
    
                if (isNaN(eventCountDown)) {
                    console.error("Invalid countdown date format. Use 'YYYY-MM-DDTHH:mm:ss'.");
                    return;
                }
    
                const interval = setInterval(() => {
                    const now = new Date().getTime();
                    const timeLeft = eventCountDown - now;
    
                    if (timeLeft > 0) {
                        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                        countdownElement.querySelector("[data-days]").textContent = days;
                        countdownElement.querySelector("[data-hours]").textContent = hours;
                        countdownElement.querySelector("[data-minutes]").textContent = minutes;
                        countdownElement.querySelector("[data-seconds]").textContent = seconds;
                    } else {
                        clearInterval(interval);
                        countdownElement.style.display = "none";
                        endMessageElement.style.display = "block";
                    }
                }, 1000);
            }
        }
    
        init() {
            this.initCountDown();
        }
    }
    
    new Countdown().init();
} catch (err) {

}

try {
    var swiper = new Swiper(".mySwiper", {
      
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
} catch (err) {

}


try {
    const Default = {
        defaultTabId: null,
        activeClasses: 'text-white bg-primary',
        inactiveClasses: 'hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800',
        onShow: () => { }
    }
    
    class Tabs {
        constructor(items = [], options = {}) {
            this._items = items
            this._activeTab = options ? this.getTab(options.defaultTabId) : null
            this._options = { ...Default, ...options }
            this._init()
        }
    
        _init() {
            if (this._items.length) {
                
                if (!this._activeTab) {
                    this._setActiveTab(this._items[0])
                }
    
                this.show(this._activeTab.id, true)
    
                this._items.map(tab => {
                    tab.triggerEl.addEventListener('click', () => {
                        this.show(tab.id)
                    })
                })
            }
        }
    
        getActiveTab() {
            return this._activeTab
        }
    
        _setActiveTab(tab) {
            this._activeTab = tab
        }
    
        getTab(id) {
            return this._items.filter(t => t.id === id)[0]
        }
    
        show(id, forceShow = false) {
            const tab = this.getTab(id)
    
            if (tab === this._activeTab && !forceShow) {
                return
            }
            this._items.map(t => {
                if (t !== tab) {
                    t.triggerEl.classList.remove(...this._options.activeClasses.split(" "));
                    t.triggerEl.classList.add(...this._options.inactiveClasses.split(" "));
                    t.targetEl.classList.add('hidden')
                    t.triggerEl.setAttribute('aria-selected', false)
                }
            })
    
            tab.triggerEl.classList.add(...this._options.activeClasses.split(" "));
            tab.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "));
            tab.triggerEl.setAttribute('aria-selected', true)
            tab.targetEl.classList.remove('hidden')
    
            this._setActiveTab(tab)
    
            this._options.onShow(this, tab)
        }
    }
    
    window.Tabs = Tabs;
    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-tabs-toggle]').forEach(triggerEl => {
    
            const tabElements = []
            let defaultTabId = null
            triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
                const isActive = el.getAttribute('aria-selected') === 'true'
                const tab = {
                    id: el.getAttribute('data-tabs-target'),
                    triggerEl: el,
                    targetEl: document.querySelector(el.getAttribute('data-tabs-target'))
                }
                tabElements.push(tab)
    
                if (isActive) {
                    defaultTabId = tab.id
                }
            })
            new Tabs(tabElements, {
                defaultTabId: defaultTabId
            })
        })
    })
} catch (error) {
    
}

try {
    var loadFile = function (event) {
        
        var image = document.getElementById(event.target.name);
        image.src = URL.createObjectURL(event.target.files[0]);
    };
      
} catch (error) {
    
}


try {
    const tilt = document.querySelectorAll(".tilt-box");

    VanillaTilt.init(tilt, {
        reverse: true,
        max: 10,
        speed: 1000,
        scale: 1.03,
        glare: true,
        reset: true,
        perspective: 1000,
        transition: true,
        "max-glare": 0.45,
        "glare-prerender": false,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45
    });

} catch (error) {
    
}


try {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };

    function typewrite() {
        if (toRotate === 'undefined') {
            changeText()
        }
        else
            var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
        document.body.appendChild(css);
    };
    window.onload(typewrite());
} catch(err) {

}