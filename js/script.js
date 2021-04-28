/**********************************
 * BOOLZAPP
 **********************************/
// LOCALE DAYJS
dayjs.locale('it');
// PLUGIN DAYJS
dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_relativeTime);

// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        // User
        user:{
            name: 'Marco',
            avatar: this.userAvatar,
        },
        // Contacts List
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luigi',
                avatar: '_5',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '10/02/2021 18:30:51',
                        message: 'Come stai oggi?',
                        status: 'sent'
                    },
                    {
                        date: '10/02/2021 18:50:15',
                        message: 'Un po\' meglio dai....',
                        status: 'received'
                    },
                    {
                        date: '10/01/2021 18:52:22',
                        message: 'Bene..sono contento!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Fabrizio',
                avatar: '_6',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '19/11/2020 10:30:12',
                        message: 'Riesci a portarmi il libro oggi?',
                        status: 'sent'
                    },
                    {
                        date: '19/11/2020 12:41:01',
                        message: '...Quindi????',
                        status: 'sent'
                    },
                    {
                        date: '19/11/2020 12:58:00',
                        message: 'Guarda che lo vedo se visualizzi il messaggio.....',
                        status: 'sent'
                    },
                    {
                        date: '19/11/2020 16:21:15',
                        message: 'E\' un piacere parlare con te...😒',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Maurizio',
                avatar: '_7',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '27/04/2021 11:35:55',
                        message: 'Hai visto la partita ieri sera?',
                        status: 'received'
                    },
                    {
                        date: '27/04/2021 11:38:42',
                        message: 'Purtroppo si....',
                        status: 'sent'
                    },
                    {
                        date: '27/04/2021 11:40:05',
                        message: 'Ahahah....GRAMMI!!!',
                        status: 'received'
                    },
                    {
                        date: '27/04/2021 11:40:35',
                        message: '🖕',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Laura',
                avatar: '_io',
                visible: true,
                notify: 0,
                messages: [
                    {
                        date: '22/04/2021 08:14:33',
                        message: 'Buongiorno amore❤️❤️❤️',
                        status: 'received'
                    },
                    {
                        date: '22/04/2021 08:47:21',
                        message: 'Buongiorno bella....a più tardi..😘😘',
                        status: 'sent'
                    },
                ],
            },
        ],
        // Active Contact
        currentContact:{
            index: null,
            lastAccess: '',
        },
        // New Message in chat input
        newMessage: '',
        // Search input value
        contactSearch: '',
        // Emoji List
        emoji: [
            '😀', '😄', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😋', '😝', '😜', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😔', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😮', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '🤡', '💩', '💀', '☠️', '👽', '👾', '🤖', '🎃', '❤️', '👋', '👍', '👎', '🖕', '💪'
        ],
        // Show/Hide Emoji List
        viewEmoji: false,
        // Answers
        answers:[
            'Cosa significa???',
            'Mi fa piacere',
            '👍👍',
            'Buonanotte..A domani',
            'Non credo',
            'Ciao',
            'Si certo!',
            'Bene grazie',
            'Così così...',
            'Grazie!',
            'Auguri!!🥳',
            'Non può piovere per sempre...',
            '🤬🤬🤬'
        ],
        // Avatar list
        avatarList: [
            '_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_io', 
        ],
        // Show Avatar List
        avatarVisible: false,
        // User Avatar
        userAvatar: '_8',
        // Microphone error
        viewError: false,
        // Notification Toggle
        activeNotify: false,
    },
    methods:{
        /**
         * Show chat of a specific contact
         * @param {number} index - contact position in the array
         */
        viewContact(index){
            if(this.currentContact.index !== null){
                this.contacts[this.currentContact.index].notify = 0;
            }
            
            this.currentContact = {...this.contacts[index],
            index: index,
            lastAccess: this.contacts[index].messages[this.contacts[index].messages.length - 1].date + ' (' + dayjs(this.contacts[index].messages[this.contacts[index].messages.length - 1].date, 'DD/MM/YYYY HH:mm:ss').fromNow() + ')'};
            //Scroll chat to bottom
            this.scrollBottom();
            //Focus on chat input
            this.$refs.messageInput.focus();
        },
        
        /**
         * Return true if currentContact index is equal to contact index 
         * @param {number} index - contact position in the array
         * @returns - boolean
         */
        isActive(index){
            if(index === this.currentContact.index){
                return true;
            } else {
                return false;
            }
        },

        /**
         * Send new message from chat input and received an answer from bot
         */
        sendMessage(){
            if(this.newMessage !== ''){
                this.currentContact.messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.newMessage,
                        status: 'sent'
                    }
                );
                // Hide Emoji's List
                this.viewEmoji = false;
                // Clear chat input
                this.newMessage = '';
                //Scroll chat to bottom
                this.scrollBottom();
                // Simulated answer
                setTimeout(() => {
                    this.currentContact.messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            message: this.answers[this.randomNumber(0, this.answers.length - 1)],
                            status: 'received'
                        }
                    );
                    this.currentContact.lastAccess = dayjs().format('DD/MM/YYYY HH:mm:ss') + ' (' + dayjs().fromNow() + ')';
                    //Scroll chat to bottom
                    this.scrollBottom();
                    this.contacts[this.currentContact.index].notify++;
                },this.randomNumber(1000, 3500));
            }
        },

        /**
         * Return contacts if name contain search input value
         * @param {number} index - contact position in the array
         * @returns visible (boolean)
         */
        isVisible(index){
            if(!this.contacts[index].name.toLowerCase().includes(this.contactSearch)){
                this.contacts[index].visible = false;
            } else {
                this.contacts[index].visible = true;
            }
            return this.contacts[index].visible;
        },

        /**
         * Highlights character name matching search input
         * @param {char} character - character of contact name
         * @returns boolean
         */
        isHighlight(character){
            if(this.contactSearch.includes(character.toLowerCase())){
                return true;
            } else {
                return false;
            }
        },
        
        /**
         * Clear search input
         */
        clearSearch(){
            this.contactSearch = '';
        },

        /**
         * Show Emoji's List
         */
        showEmoji(){
            if(this.currentContact.index !== null){
                this.viewEmoji = !this.viewEmoji;
                //Focus on chat input
                this.$refs.messageInput.focus();
            }
        },

        /**
         * Add Emoji to chat input
         * @param {number} index - emoji position in the array
         */
        addEmoji(index){
            // If chat input isn't disabled
            if(this.currentContact.index !== null){
                this.newMessage = this.newMessage + this.emoji[index];
                //Focus on chat input
                this.$refs.messageInput.focus();
            }
        },

        /**
         * Scroll chat to bottom
         */
        scrollBottom(){
            setTimeout(() => {
                this.$refs.chatWindow.scrollTop =  this.$refs.chatWindow.scrollHeight;
            }, 1);
        },

        /**
         * Return random number between min and max
         * @param {number} min 
         * @param {number} max 
         * @returns 
         */
        randomNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        /**
         * Show Avatar List
         */
        showAvatar(){
            this.avatarVisible = !this.avatarVisible;
        },

        /**
         * Choose avatar for user
         * @param {number} index - avatar position in avatar list
         */
        chooseAvatar(index){
            this.userAvatar = this.avatarList[index];
            this.avatarVisible = !this.avatarVisible;
        },
        
        /**
         * Show Microphone error
         */
        showError(){
            if(this.currentContact.index !== null){
                this.viewError = !this.viewError;
                setTimeout(() => {
                    this.viewError = !this.viewError;
                }, 4000);
            }
        },

        /**
         * Close chat window
         */
        closeChat(){
            this.currentContact.index = null;
        },
        
        /**
         * Allow/Block notification
         */
        switchNotify(){
            this.activeNotify = !this.activeNotify; 
        },
    },
});