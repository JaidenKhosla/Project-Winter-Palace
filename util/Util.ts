export function shuffle<T>(array: T[]): void
{   
    for(let i = 0; i < array.length; i++)
    {
        const randomIndex = Math.floor(Math.random()*array.length);

        const temp = array[i];

        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

// type Node<T> =
// {
//     data: T,
//     timestamp: number,
//     time_limit: number
// }

// class Cache<K,V> implements Map<K,V>
// {
//     data: Map<K, Node<V>>
//     default_time: number = -1
//     size: number;

//     constructor(default_time?: number)
//     {
//         this.data = new Map();
//         this.size = 0;
        
//         if(default_time) this.default_time = default_time;
//     }
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
//         throw new Error("Method not implemented.");
//     }
//     has(key: K): boolean {
//         throw new Error("Method not implemented.");
//     }
//     entries(): MapIterator<[K, V]> {
//         throw new Error("Method not implemented.");
//     }
//     keys(): MapIterator<K> {
//         throw new Error("Method not implemented.");
//     }
//     values(): MapIterator<V> {
//         throw new Error("Method not implemented.");
//     }
//     getOrInsert(key: K, defaultValue: V): V {
//         throw new Error("Method not implemented.");
//     }
//     getOrInsertComputed(key: K, callback: (key: K) => V): V {
//         this.validate(key);

//         return this.data.getOrInsertComputed(key, callback);
//     }
 
//     delete(key: K): boolean
//     {
//         this.validate(key);

//         return this.data.delete(key);
//     }

//     get(key: K): V | undefined
//     {
//         this.validate(key);

//         return this.data.get(key)?.data;
//     }

//     set(key: K, value: V, time_limit?: number): this
//     {
//         this.data.set(key, {
//             data: value,
//             timestamp: Date.now(),
//             time_limit: time_limit ? time_limit : this.default_time
//         });

//         return this;
//     }

//     private validate(key: K): void
//     {
//         if(!this.data.has(key)) return;

//         const node = this.data.get(key)!;

//         if(node.timestamp + node?.time_limit < Date.now())
//         {
//             this.data.delete(key);
//         }
//     }

//     clear(): void
//     {
//         this.data.clear();
//     }

// }