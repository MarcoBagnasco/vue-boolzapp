/**********************************
 * BOOLZAPP
 **********************************/
// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        // User
        user:{
            name: 'Marco',
            avatar: '_8',
        },
        // Contacts List
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
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
        ],
        // Active Contact
        currentContact:{
            index: null,
        },
        // New Message in chat input
        newMessage: '',
        // Search input value
        contactSearch: '',
        // Emoji List
        emoji: ['😀', '😄', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😋', '😝', '😜', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😔', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😮', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '🤡', '💩', '💀', '☠️', '👽', '👾', '🤖', '🎃'],
        // Show/Hide Emoji List
        viewEmoji: false,
    },
    methods:{
        /**
         * Show chat of a specific contact
         * @param {number} index - contact position in the array
         */
        viewContact(index){
            this.currentContact = {...this.contacts[index],
            index: index};
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
            this.currentContact.messages.push(
                {
                    date: '10/01/2020 15:30:55',
                    message: this.newMessage,
                    status: 'sent'
                }
            );
            // Hide Emoji's List
            this.viewEmoji = false;
            // Clear chat input
            this.newMessage = '';
            // Simulated answer
            setTimeout(() => {
                this.currentContact.messages.push(
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'ok',
                        status: 'received'
                    }
                );
            },1000);
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
            this.viewEmoji = !this.viewEmoji;
            //Focus on chat input
            this.$refs.messageInput.focus();
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

    },
});