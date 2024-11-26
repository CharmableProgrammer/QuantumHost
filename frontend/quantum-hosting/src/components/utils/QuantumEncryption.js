import Base64 from 'base64-transcode';

class QuantumEncryption {
    static isEncrypted = false;

    static encrypt(data) {
        return this.isEncrypted ? Base64.encode(JSON.stringify(data)) : data;
    }

    static decrypt(data) {
        //Simulate quantum decryption using base64 decoding
        if (this.isEncrypted) {
            try {
                return JSON.parse(Base64.decode(data));
            } catch (error) {
                console.error("Decryption failed:", error);
                return data; //Return original data if decruption fails
            }
        }
        return data;
    }

    static toggleEncryption() {
        this.isEncrypted = !this.isEncrypted;
        console.log(`Quantum encryption ${this.isEncrypted ? 
            'enabled' : 'disabled'}`);
    }
}

export default QuantumEncryption;