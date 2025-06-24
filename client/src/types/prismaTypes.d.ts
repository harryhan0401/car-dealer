
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model SellCar
 * 
 */
export type SellCar = $Result.DefaultSelection<Prisma.$SellCarPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Make: {
  Acura: 'Acura',
  AlfaRomeo: 'AlfaRomeo',
  AstonMartin: 'AstonMartin',
  Audi: 'Audi',
  Bentley: 'Bentley',
  BMW: 'BMW',
  Bugatti: 'Bugatti',
  Buick: 'Buick',
  Cadillac: 'Cadillac',
  Chevrolet: 'Chevrolet',
  Chrysler: 'Chrysler',
  Citroen: 'Citroen',
  Dodge: 'Dodge',
  Ferrari: 'Ferrari',
  Fiat: 'Fiat',
  Ford: 'Ford',
  Genesis: 'Genesis',
  Gmc: 'Gmc',
  Honda: 'Honda',
  Hyundai: 'Hyundai',
  Infiniti: 'Infiniti',
  Jaguar: 'Jaguar',
  Jeep: 'Jeep',
  Kia: 'Kia',
  Koenigsegg: 'Koenigsegg',
  Lamborghini: 'Lamborghini',
  LandRover: 'LandRover',
  Lexus: 'Lexus',
  Lincoln: 'Lincoln',
  Lotus: 'Lotus',
  Maserati: 'Maserati',
  Maybach: 'Maybach',
  Mazda: 'Mazda',
  Mclaren: 'Mclaren',
  MercedesBenz: 'MercedesBenz',
  Mini: 'Mini',
  Mitsubishi: 'Mitsubishi',
  Nissan: 'Nissan',
  Pagani: 'Pagani',
  Peugeot: 'Peugeot',
  Porsche: 'Porsche',
  Ram: 'Ram',
  Renault: 'Renault',
  RollsRoyce: 'RollsRoyce',
  Saab: 'Saab',
  Subaru: 'Subaru',
  Suzuki: 'Suzuki',
  Tesla: 'Tesla',
  Toyota: 'Toyota',
  Volkswagen: 'Volkswagen',
  Volvo: 'Volvo'
};

export type Make = (typeof Make)[keyof typeof Make]


export const Type: {
  Sedan: 'Sedan',
  Coupe: 'Coupe',
  Hatchback: 'Hatchback',
  SUV: 'SUV',
  Truck: 'Truck',
  Convertible: 'Convertible',
  Wagon: 'Wagon',
  Minivan: 'Minivan',
  Sportscar: 'Sportscar',
  Crossover: 'Crossover',
  Roadster: 'Roadster',
  Luxury: 'Luxury',
  Electric: 'Electric',
  Hybrid: 'Hybrid',
  Diesel: 'Diesel',
  CrossoverSUV: 'CrossoverSUV',
  Van: 'Van'
};

export type Type = (typeof Type)[keyof typeof Type]


export const Fuel: {
  Petrol: 'Petrol',
  Diesel: 'Diesel',
  Hybrid: 'Hybrid',
  Electric: 'Electric',
  Ethanol: 'Ethanol',
  Unleaded: 'Unleaded',
  E10: 'E10',
  PremiumUnleaded95: 'PremiumUnleaded95',
  PremiumUnleaded98: 'PremiumUnleaded98',
  Biofuels: 'Biofuels',
  E85: 'E85',
  Hydrogen: 'Hydrogen',
  NaturalGas: 'NaturalGas',
  Biodiesel: 'Biodiesel',
  LPG: 'LPG'
};

export type Fuel = (typeof Fuel)[keyof typeof Fuel]


export const Drive: {
  FWD: 'FWD',
  AWD: 'AWD',
  RWD: 'RWD',
  FourWD: 'FourWD'
};

export type Drive = (typeof Drive)[keyof typeof Drive]


export const Transmission: {
  Manual: 'Manual',
  Automatic: 'Automatic',
  SemiAutomatic: 'SemiAutomatic',
  CVT: 'CVT',
  DualClutch: 'DualClutch',
  Tiptronic: 'Tiptronic',
  STronic: 'STronic',
  SevenSpeedAutomatic: 'SevenSpeedAutomatic',
  SixSpeedAutomatic: 'SixSpeedAutomatic',
  EightSpeedAutomatic: 'EightSpeedAutomatic'
};

export type Transmission = (typeof Transmission)[keyof typeof Transmission]


export const OrderStatus: {
  Pending: 'Pending',
  Declined: 'Declined',
  Confirmed: 'Confirmed',
  Paid: 'Paid'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const EnquiryStatus: {
  Pending: 'Pending',
  Accepted: 'Accepted',
  Declined: 'Declined'
};

export type EnquiryStatus = (typeof EnquiryStatus)[keyof typeof EnquiryStatus]


export const PaymentMethod: {
  Cash: 'Cash',
  CreditCard: 'CreditCard',
  DebitCard: 'DebitCard',
  Paypal: 'Paypal',
  BankTransfer: 'BankTransfer',
  Bitcoin: 'Bitcoin',
  ApplePay: 'ApplePay',
  GooglePay: 'GooglePay'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  Declined: 'Declined'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PreferredContactMethod: {
  Email: 'Email',
  Phone: 'Phone',
  All: 'All'
};

export type PreferredContactMethod = (typeof PreferredContactMethod)[keyof typeof PreferredContactMethod]

}

export type Make = $Enums.Make

export const Make: typeof $Enums.Make

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type Fuel = $Enums.Fuel

export const Fuel: typeof $Enums.Fuel

export type Drive = $Enums.Drive

export const Drive: typeof $Enums.Drive

export type Transmission = $Enums.Transmission

export const Transmission: typeof $Enums.Transmission

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type EnquiryStatus = $Enums.EnquiryStatus

export const EnquiryStatus: typeof $Enums.EnquiryStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PreferredContactMethod = $Enums.PreferredContactMethod

export const PreferredContactMethod: typeof $Enums.PreferredContactMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellCar`: Exposes CRUD operations for the **SellCar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellCars
    * const sellCars = await prisma.sellCar.findMany()
    * ```
    */
  get sellCar(): Prisma.SellCarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Location: 'Location',
    Car: 'Car',
    SellCar: 'SellCar',
    Enquiry: 'Enquiry',
    Order: 'Order',
    Payment: 'Payment',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "location" | "car" | "sellCar" | "enquiry" | "order" | "payment" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      SellCar: {
        payload: Prisma.$SellCarPayload<ExtArgs>
        fields: Prisma.SellCarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellCarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellCarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          findFirst: {
            args: Prisma.SellCarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellCarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          findMany: {
            args: Prisma.SellCarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>[]
          }
          create: {
            args: Prisma.SellCarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          createMany: {
            args: Prisma.SellCarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellCarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>[]
          }
          delete: {
            args: Prisma.SellCarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          update: {
            args: Prisma.SellCarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          deleteMany: {
            args: Prisma.SellCarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellCarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellCarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>[]
          }
          upsert: {
            args: Prisma.SellCarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellCarPayload>
          }
          aggregate: {
            args: Prisma.SellCarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellCar>
          }
          groupBy: {
            args: Prisma.SellCarGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellCarGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellCarCountArgs<ExtArgs>
            result: $Utils.Optional<SellCarCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    location?: LocationOmit
    car?: CarOmit
    sellCar?: SellCarOmit
    enquiry?: EnquiryOmit
    order?: OrderOmit
    payment?: PaymentOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favourites: number
    carSales: number
    orders: number
    reviews: number
    reviewer: number
    enquiries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
    carSales?: boolean | UserCountOutputTypeCountCarSalesArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    reviewer?: boolean | UserCountOutputTypeCountReviewerArgs
    enquiries?: boolean | UserCountOutputTypeCountEnquiriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellCarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellCarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    users: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LocationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    sellCars: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCars?: boolean | CarCountOutputTypeCountSellCarsArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountSellCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellCarWhereInput
  }


  /**
   * Count Type SellCarCountOutputType
   */

  export type SellCarCountOutputType = {
    enquiries: number
    favouritedBy: number
  }

  export type SellCarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiries?: boolean | SellCarCountOutputTypeCountEnquiriesArgs
    favouritedBy?: boolean | SellCarCountOutputTypeCountFavouritedByArgs
  }

  // Custom InputTypes
  /**
   * SellCarCountOutputType without action
   */
  export type SellCarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCarCountOutputType
     */
    select?: SellCarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SellCarCountOutputType without action
   */
  export type SellCarCountOutputTypeCountEnquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }

  /**
   * SellCarCountOutputType without action
   */
  export type SellCarCountOutputTypeCountFavouritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    locationId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatarUrl: string | null
    preferredContactMethod: $Enums.PreferredContactMethod | null
    isProfileSetup: boolean | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    locationId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatarUrl: string | null
    preferredContactMethod: $Enums.PreferredContactMethod | null
    isProfileSetup: boolean | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cognitoId: number
    locationId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    avatarUrl: number
    preferredContactMethod: number
    isProfileSetup: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatarUrl?: true
    preferredContactMethod?: true
    isProfileSetup?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatarUrl?: true
    preferredContactMethod?: true
    isProfileSetup?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatarUrl?: true
    preferredContactMethod?: true
    isProfileSetup?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    cognitoId: string
    locationId: number | null
    firstName: string
    lastName: string
    email: string
    phone: string
    avatarUrl: string
    preferredContactMethod: $Enums.PreferredContactMethod
    isProfileSetup: boolean
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatarUrl?: boolean
    preferredContactMethod?: boolean
    isProfileSetup?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    carSales?: boolean | User$carSalesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewer?: boolean | User$reviewerArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    enquiries?: boolean | User$enquiriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatarUrl?: boolean
    preferredContactMethod?: boolean
    isProfileSetup?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    location?: boolean | User$locationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatarUrl?: boolean
    preferredContactMethod?: boolean
    isProfileSetup?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    location?: boolean | User$locationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatarUrl?: boolean
    preferredContactMethod?: boolean
    isProfileSetup?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "locationId" | "firstName" | "lastName" | "email" | "phone" | "avatarUrl" | "preferredContactMethod" | "isProfileSetup" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    carSales?: boolean | User$carSalesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewer?: boolean | User$reviewerArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    enquiries?: boolean | User$enquiriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | User$locationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | User$locationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favourites: Prisma.$SellCarPayload<ExtArgs>[]
      carSales: Prisma.$SellCarPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      reviewer: Prisma.$ReviewPayload<ExtArgs>[]
      location: Prisma.$LocationPayload<ExtArgs> | null
      enquiries: Prisma.$EnquiryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      locationId: number | null
      firstName: string
      lastName: string
      email: string
      phone: string
      avatarUrl: string
      preferredContactMethod: $Enums.PreferredContactMethod
      isProfileSetup: boolean
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carSales<T extends User$carSalesArgs<ExtArgs> = {}>(args?: Subset<T, User$carSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewer<T extends User$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    location<T extends User$locationArgs<ExtArgs> = {}>(args?: Subset<T, User$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enquiries<T extends User$enquiriesArgs<ExtArgs> = {}>(args?: Subset<T, User$enquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly cognitoId: FieldRef<"User", 'String'>
    readonly locationId: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly preferredContactMethod: FieldRef<"User", 'PreferredContactMethod'>
    readonly isProfileSetup: FieldRef<"User", 'Boolean'>
    readonly dateTimeCreated: FieldRef<"User", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    where?: SellCarWhereInput
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    cursor?: SellCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * User.carSales
   */
  export type User$carSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    where?: SellCarWhereInput
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    cursor?: SellCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewer
   */
  export type User$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.location
   */
  export type User$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * User.enquiries
   */
  export type User$enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    users?: boolean | Location$usersArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Location$usersArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Location$usersArgs<ExtArgs> = {}>(args?: Subset<T, Location$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
    readonly dateTimeCreated: FieldRef<"Location", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.users
   */
  export type Location$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type CarSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type CarMinAggregateOutputType = {
    id: number | null
    make: $Enums.Make | null
    model: string | null
    year: number | null
    type: $Enums.Type | null
    fuel: $Enums.Fuel | null
    drive: $Enums.Drive | null
    transmission: $Enums.Transmission | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: number | null
    make: $Enums.Make | null
    model: string | null
    year: number | null
    type: $Enums.Type | null
    fuel: $Enums.Fuel | null
    drive: $Enums.Drive | null
    transmission: $Enums.Transmission | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    type: number
    fuel: number
    drive: number
    transmission: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type CarSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    type?: true
    fuel?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    type?: true
    fuel?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    type?: true
    fuel?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: number
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    type?: boolean
    fuel?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCars?: boolean | Car$sellCarsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    type?: boolean
    fuel?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    type?: boolean
    fuel?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    type?: boolean
    fuel?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "type" | "fuel" | "drive" | "transmission" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCars?: boolean | Car$sellCarsArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      sellCars: Prisma.$SellCarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      make: $Enums.Make
      model: string
      year: number
      type: $Enums.Type
      fuel: $Enums.Fuel
      drive: $Enums.Drive
      transmission: $Enums.Transmission
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellCars<T extends Car$sellCarsArgs<ExtArgs> = {}>(args?: Subset<T, Car$sellCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */ 
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'Int'>
    readonly make: FieldRef<"Car", 'Make'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly type: FieldRef<"Car", 'Type'>
    readonly fuel: FieldRef<"Car", 'Fuel'>
    readonly drive: FieldRef<"Car", 'Drive'>
    readonly transmission: FieldRef<"Car", 'Transmission'>
    readonly dateTimeCreated: FieldRef<"Car", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.sellCars
   */
  export type Car$sellCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    where?: SellCarWhereInput
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    cursor?: SellCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model SellCar
   */

  export type AggregateSellCar = {
    _count: SellCarCountAggregateOutputType | null
    _avg: SellCarAvgAggregateOutputType | null
    _sum: SellCarSumAggregateOutputType | null
    _min: SellCarMinAggregateOutputType | null
    _max: SellCarMaxAggregateOutputType | null
  }

  export type SellCarAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    mileage: number | null
    price: number | null
  }

  export type SellCarSumAggregateOutputType = {
    id: number | null
    carId: number | null
    mileage: number | null
    price: number | null
  }

  export type SellCarMinAggregateOutputType = {
    id: number | null
    vin: string | null
    sellerCognitoId: string | null
    carId: number | null
    mileage: number | null
    price: number | null
    description: string | null
    isPublic: boolean | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type SellCarMaxAggregateOutputType = {
    id: number | null
    vin: string | null
    sellerCognitoId: string | null
    carId: number | null
    mileage: number | null
    price: number | null
    description: string | null
    isPublic: boolean | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type SellCarCountAggregateOutputType = {
    id: number
    vin: number
    sellerCognitoId: number
    carId: number
    mileage: number
    price: number
    photoUrls: number
    description: number
    isPublic: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type SellCarAvgAggregateInputType = {
    id?: true
    carId?: true
    mileage?: true
    price?: true
  }

  export type SellCarSumAggregateInputType = {
    id?: true
    carId?: true
    mileage?: true
    price?: true
  }

  export type SellCarMinAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    description?: true
    isPublic?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type SellCarMaxAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    description?: true
    isPublic?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type SellCarCountAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    photoUrls?: true
    description?: true
    isPublic?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type SellCarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellCar to aggregate.
     */
    where?: SellCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellCars to fetch.
     */
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellCars
    **/
    _count?: true | SellCarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellCarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellCarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellCarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellCarMaxAggregateInputType
  }

  export type GetSellCarAggregateType<T extends SellCarAggregateArgs> = {
        [P in keyof T & keyof AggregateSellCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellCar[P]>
      : GetScalarType<T[P], AggregateSellCar[P]>
  }




  export type SellCarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellCarWhereInput
    orderBy?: SellCarOrderByWithAggregationInput | SellCarOrderByWithAggregationInput[]
    by: SellCarScalarFieldEnum[] | SellCarScalarFieldEnum
    having?: SellCarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellCarCountAggregateInputType | true
    _avg?: SellCarAvgAggregateInputType
    _sum?: SellCarSumAggregateInputType
    _min?: SellCarMinAggregateInputType
    _max?: SellCarMaxAggregateInputType
  }

  export type SellCarGroupByOutputType = {
    id: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls: string[]
    description: string
    isPublic: boolean
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: SellCarCountAggregateOutputType | null
    _avg: SellCarAvgAggregateOutputType | null
    _sum: SellCarSumAggregateOutputType | null
    _min: SellCarMinAggregateOutputType | null
    _max: SellCarMaxAggregateOutputType | null
  }

  type GetSellCarGroupByPayload<T extends SellCarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellCarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellCarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellCarGroupByOutputType[P]>
            : GetScalarType<T[P], SellCarGroupByOutputType[P]>
        }
      >
    >


  export type SellCarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    description?: boolean
    isPublic?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    enquiries?: boolean | SellCar$enquiriesArgs<ExtArgs>
    order?: boolean | SellCar$orderArgs<ExtArgs>
    favouritedBy?: boolean | SellCar$favouritedByArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    _count?: boolean | SellCarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellCar"]>

  export type SellCarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    description?: boolean
    isPublic?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellCar"]>

  export type SellCarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    description?: boolean
    isPublic?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellCar"]>

  export type SellCarSelectScalar = {
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    description?: boolean
    isPublic?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type SellCarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vin" | "sellerCognitoId" | "carId" | "mileage" | "price" | "photoUrls" | "description" | "isPublic" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["sellCar"]>
  export type SellCarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enquiries?: boolean | SellCar$enquiriesArgs<ExtArgs>
    order?: boolean | SellCar$orderArgs<ExtArgs>
    favouritedBy?: boolean | SellCar$favouritedByArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
    _count?: boolean | SellCarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SellCarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type SellCarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $SellCarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellCar"
    objects: {
      enquiries: Prisma.$EnquiryPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs> | null
      favouritedBy: Prisma.$UserPayload<ExtArgs>[]
      seller: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vin: string
      sellerCognitoId: string
      carId: number
      mileage: number
      price: number
      photoUrls: string[]
      description: string
      isPublic: boolean
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["sellCar"]>
    composites: {}
  }

  type SellCarGetPayload<S extends boolean | null | undefined | SellCarDefaultArgs> = $Result.GetResult<Prisma.$SellCarPayload, S>

  type SellCarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellCarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellCarCountAggregateInputType | true
    }

  export interface SellCarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellCar'], meta: { name: 'SellCar' } }
    /**
     * Find zero or one SellCar that matches the filter.
     * @param {SellCarFindUniqueArgs} args - Arguments to find a SellCar
     * @example
     * // Get one SellCar
     * const sellCar = await prisma.sellCar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellCarFindUniqueArgs>(args: SelectSubset<T, SellCarFindUniqueArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellCar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellCarFindUniqueOrThrowArgs} args - Arguments to find a SellCar
     * @example
     * // Get one SellCar
     * const sellCar = await prisma.sellCar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellCarFindUniqueOrThrowArgs>(args: SelectSubset<T, SellCarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellCar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarFindFirstArgs} args - Arguments to find a SellCar
     * @example
     * // Get one SellCar
     * const sellCar = await prisma.sellCar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellCarFindFirstArgs>(args?: SelectSubset<T, SellCarFindFirstArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellCar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarFindFirstOrThrowArgs} args - Arguments to find a SellCar
     * @example
     * // Get one SellCar
     * const sellCar = await prisma.sellCar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellCarFindFirstOrThrowArgs>(args?: SelectSubset<T, SellCarFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellCars
     * const sellCars = await prisma.sellCar.findMany()
     * 
     * // Get first 10 SellCars
     * const sellCars = await prisma.sellCar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellCarWithIdOnly = await prisma.sellCar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellCarFindManyArgs>(args?: SelectSubset<T, SellCarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellCar.
     * @param {SellCarCreateArgs} args - Arguments to create a SellCar.
     * @example
     * // Create one SellCar
     * const SellCar = await prisma.sellCar.create({
     *   data: {
     *     // ... data to create a SellCar
     *   }
     * })
     * 
     */
    create<T extends SellCarCreateArgs>(args: SelectSubset<T, SellCarCreateArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellCars.
     * @param {SellCarCreateManyArgs} args - Arguments to create many SellCars.
     * @example
     * // Create many SellCars
     * const sellCar = await prisma.sellCar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellCarCreateManyArgs>(args?: SelectSubset<T, SellCarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellCars and returns the data saved in the database.
     * @param {SellCarCreateManyAndReturnArgs} args - Arguments to create many SellCars.
     * @example
     * // Create many SellCars
     * const sellCar = await prisma.sellCar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellCars and only return the `id`
     * const sellCarWithIdOnly = await prisma.sellCar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellCarCreateManyAndReturnArgs>(args?: SelectSubset<T, SellCarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellCar.
     * @param {SellCarDeleteArgs} args - Arguments to delete one SellCar.
     * @example
     * // Delete one SellCar
     * const SellCar = await prisma.sellCar.delete({
     *   where: {
     *     // ... filter to delete one SellCar
     *   }
     * })
     * 
     */
    delete<T extends SellCarDeleteArgs>(args: SelectSubset<T, SellCarDeleteArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellCar.
     * @param {SellCarUpdateArgs} args - Arguments to update one SellCar.
     * @example
     * // Update one SellCar
     * const sellCar = await prisma.sellCar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellCarUpdateArgs>(args: SelectSubset<T, SellCarUpdateArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellCars.
     * @param {SellCarDeleteManyArgs} args - Arguments to filter SellCars to delete.
     * @example
     * // Delete a few SellCars
     * const { count } = await prisma.sellCar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellCarDeleteManyArgs>(args?: SelectSubset<T, SellCarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellCars
     * const sellCar = await prisma.sellCar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellCarUpdateManyArgs>(args: SelectSubset<T, SellCarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellCars and returns the data updated in the database.
     * @param {SellCarUpdateManyAndReturnArgs} args - Arguments to update many SellCars.
     * @example
     * // Update many SellCars
     * const sellCar = await prisma.sellCar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellCars and only return the `id`
     * const sellCarWithIdOnly = await prisma.sellCar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SellCarUpdateManyAndReturnArgs>(args: SelectSubset<T, SellCarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellCar.
     * @param {SellCarUpsertArgs} args - Arguments to update or create a SellCar.
     * @example
     * // Update or create a SellCar
     * const sellCar = await prisma.sellCar.upsert({
     *   create: {
     *     // ... data to create a SellCar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellCar we want to update
     *   }
     * })
     */
    upsert<T extends SellCarUpsertArgs>(args: SelectSubset<T, SellCarUpsertArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarCountArgs} args - Arguments to filter SellCars to count.
     * @example
     * // Count the number of SellCars
     * const count = await prisma.sellCar.count({
     *   where: {
     *     // ... the filter for the SellCars we want to count
     *   }
     * })
    **/
    count<T extends SellCarCountArgs>(
      args?: Subset<T, SellCarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellCarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellCarAggregateArgs>(args: Subset<T, SellCarAggregateArgs>): Prisma.PrismaPromise<GetSellCarAggregateType<T>>

    /**
     * Group by SellCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellCarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SellCarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellCarGroupByArgs['orderBy'] }
        : { orderBy?: SellCarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SellCarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellCar model
   */
  readonly fields: SellCarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellCar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellCarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enquiries<T extends SellCar$enquiriesArgs<ExtArgs> = {}>(args?: Subset<T, SellCar$enquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends SellCar$orderArgs<ExtArgs> = {}>(args?: Subset<T, SellCar$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favouritedBy<T extends SellCar$favouritedByArgs<ExtArgs> = {}>(args?: Subset<T, SellCar$favouritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SellCar model
   */ 
  interface SellCarFieldRefs {
    readonly id: FieldRef<"SellCar", 'Int'>
    readonly vin: FieldRef<"SellCar", 'String'>
    readonly sellerCognitoId: FieldRef<"SellCar", 'String'>
    readonly carId: FieldRef<"SellCar", 'Int'>
    readonly mileage: FieldRef<"SellCar", 'Int'>
    readonly price: FieldRef<"SellCar", 'Float'>
    readonly photoUrls: FieldRef<"SellCar", 'String[]'>
    readonly description: FieldRef<"SellCar", 'String'>
    readonly isPublic: FieldRef<"SellCar", 'Boolean'>
    readonly dateTimeCreated: FieldRef<"SellCar", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"SellCar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellCar findUnique
   */
  export type SellCarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter, which SellCar to fetch.
     */
    where: SellCarWhereUniqueInput
  }

  /**
   * SellCar findUniqueOrThrow
   */
  export type SellCarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter, which SellCar to fetch.
     */
    where: SellCarWhereUniqueInput
  }

  /**
   * SellCar findFirst
   */
  export type SellCarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter, which SellCar to fetch.
     */
    where?: SellCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellCars to fetch.
     */
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellCars.
     */
    cursor?: SellCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellCars.
     */
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * SellCar findFirstOrThrow
   */
  export type SellCarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter, which SellCar to fetch.
     */
    where?: SellCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellCars to fetch.
     */
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellCars.
     */
    cursor?: SellCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellCars.
     */
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * SellCar findMany
   */
  export type SellCarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter, which SellCars to fetch.
     */
    where?: SellCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellCars to fetch.
     */
    orderBy?: SellCarOrderByWithRelationInput | SellCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellCars.
     */
    cursor?: SellCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellCars.
     */
    skip?: number
    distinct?: SellCarScalarFieldEnum | SellCarScalarFieldEnum[]
  }

  /**
   * SellCar create
   */
  export type SellCarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * The data needed to create a SellCar.
     */
    data: XOR<SellCarCreateInput, SellCarUncheckedCreateInput>
  }

  /**
   * SellCar createMany
   */
  export type SellCarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellCars.
     */
    data: SellCarCreateManyInput | SellCarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellCar createManyAndReturn
   */
  export type SellCarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * The data used to create many SellCars.
     */
    data: SellCarCreateManyInput | SellCarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellCar update
   */
  export type SellCarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * The data needed to update a SellCar.
     */
    data: XOR<SellCarUpdateInput, SellCarUncheckedUpdateInput>
    /**
     * Choose, which SellCar to update.
     */
    where: SellCarWhereUniqueInput
  }

  /**
   * SellCar updateMany
   */
  export type SellCarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellCars.
     */
    data: XOR<SellCarUpdateManyMutationInput, SellCarUncheckedUpdateManyInput>
    /**
     * Filter which SellCars to update
     */
    where?: SellCarWhereInput
    /**
     * Limit how many SellCars to update.
     */
    limit?: number
  }

  /**
   * SellCar updateManyAndReturn
   */
  export type SellCarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * The data used to update SellCars.
     */
    data: XOR<SellCarUpdateManyMutationInput, SellCarUncheckedUpdateManyInput>
    /**
     * Filter which SellCars to update
     */
    where?: SellCarWhereInput
    /**
     * Limit how many SellCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellCar upsert
   */
  export type SellCarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * The filter to search for the SellCar to update in case it exists.
     */
    where: SellCarWhereUniqueInput
    /**
     * In case the SellCar found by the `where` argument doesn't exist, create a new SellCar with this data.
     */
    create: XOR<SellCarCreateInput, SellCarUncheckedCreateInput>
    /**
     * In case the SellCar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellCarUpdateInput, SellCarUncheckedUpdateInput>
  }

  /**
   * SellCar delete
   */
  export type SellCarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
    /**
     * Filter which SellCar to delete.
     */
    where: SellCarWhereUniqueInput
  }

  /**
   * SellCar deleteMany
   */
  export type SellCarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellCars to delete
     */
    where?: SellCarWhereInput
    /**
     * Limit how many SellCars to delete.
     */
    limit?: number
  }

  /**
   * SellCar.enquiries
   */
  export type SellCar$enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * SellCar.order
   */
  export type SellCar$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * SellCar.favouritedBy
   */
  export type SellCar$favouritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * SellCar without action
   */
  export type SellCarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellCar
     */
    select?: SellCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellCar
     */
    omit?: SellCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellCarInclude<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    offerPrice: number | null
  }

  export type EnquirySumAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    offerPrice: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    buyerCognitoId: string | null
    offerPrice: number | null
    message: string | null
    status: $Enums.EnquiryStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    buyerCognitoId: string | null
    offerPrice: number | null
    message: string | null
    status: $Enums.EnquiryStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    sellCarId: number
    buyerCognitoId: number
    offerPrice: number
    message: number
    status: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    id?: true
    sellCarId?: true
    offerPrice?: true
  }

  export type EnquirySumAggregateInputType = {
    id?: true
    sellCarId?: true
    offerPrice?: true
  }

  export type EnquiryMinAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    offerPrice?: true
    message?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    offerPrice?: true
    message?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    offerPrice?: true
    message?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: number
    sellCarId: number
    buyerCognitoId: string
    offerPrice: number
    message: string
    status: $Enums.EnquiryStatus
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    offerPrice?: boolean
    message?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    offerPrice?: boolean
    message?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    offerPrice?: boolean
    message?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    offerPrice?: boolean
    message?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellCarId" | "buyerCognitoId" | "offerPrice" | "message" | "status" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["enquiry"]>
  export type EnquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {
      sellCar: Prisma.$SellCarPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sellCarId: number
      buyerCognitoId: string
      offerPrice: number
      message: string
      status: $Enums.EnquiryStatus
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellCar<T extends SellCarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellCarDefaultArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enquiry model
   */ 
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'Int'>
    readonly sellCarId: FieldRef<"Enquiry", 'Int'>
    readonly buyerCognitoId: FieldRef<"Enquiry", 'String'>
    readonly offerPrice: FieldRef<"Enquiry", 'Float'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly status: FieldRef<"Enquiry", 'EnquiryStatus'>
    readonly dateTimeCreated: FieldRef<"Enquiry", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    buyerCognitoId: string | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    sellCarId: number | null
    buyerCognitoId: string | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    sellCarId: number
    buyerCognitoId: number
    totalAmount: number
    status: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    sellCarId?: true
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    sellCarId?: true
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    sellCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    sellCarId: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    sellCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellCarId" | "buyerCognitoId" | "totalAmount" | "status" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellCar?: boolean | SellCarDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      sellCar: Prisma.$SellCarPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sellCarId: number
      buyerCognitoId: string
      totalAmount: number
      status: $Enums.OrderStatus
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sellCar<T extends SellCarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SellCarDefaultArgs<ExtArgs>>): Prisma__SellCarClient<$Result.GetResult<Prisma.$SellCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly sellCarId: FieldRef<"Order", 'Int'>
    readonly buyerCognitoId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly dateTimeCreated: FieldRef<"Order", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    amount: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    amount: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    paymentMethod: number
    paymentStatus: number
    amount: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paymentMethod" | "paymentStatus" | "amount" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      paymentMethod: $Enums.PaymentMethod
      paymentStatus: $Enums.PaymentStatus
      amount: number
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly orderId: FieldRef<"Payment", 'Int'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly dateTimeCreated: FieldRef<"Payment", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    reviewerCognitoId: string | null
    rating: number | null
    comment: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    reviewerCognitoId: string | null
    rating: number | null
    comment: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userCognitoId: number
    reviewerCognitoId: number
    rating: number
    comment: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userCognitoId: string
    reviewerCognitoId: string
    rating: number
    comment: string
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCognitoId" | "reviewerCognitoId" | "rating" | "comment" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCognitoId: string
      reviewerCognitoId: string
      rating: number
      comment: string
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userCognitoId: FieldRef<"Review", 'String'>
    readonly reviewerCognitoId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly dateTimeCreated: FieldRef<"Review", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    locationId: 'locationId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    preferredContactMethod: 'preferredContactMethod',
    isProfileSetup: 'isProfileSetup',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    type: 'type',
    fuel: 'fuel',
    drive: 'drive',
    transmission: 'transmission',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const SellCarScalarFieldEnum: {
    id: 'id',
    vin: 'vin',
    sellerCognitoId: 'sellerCognitoId',
    carId: 'carId',
    mileage: 'mileage',
    price: 'price',
    photoUrls: 'photoUrls',
    description: 'description',
    isPublic: 'isPublic',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type SellCarScalarFieldEnum = (typeof SellCarScalarFieldEnum)[keyof typeof SellCarScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    sellCarId: 'sellCarId',
    buyerCognitoId: 'buyerCognitoId',
    offerPrice: 'offerPrice',
    message: 'message',
    status: 'status',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    sellCarId: 'sellCarId',
    buyerCognitoId: 'buyerCognitoId',
    totalAmount: 'totalAmount',
    status: 'status',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    amount: 'amount',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userCognitoId: 'userCognitoId',
    reviewerCognitoId: 'reviewerCognitoId',
    rating: 'rating',
    comment: 'comment',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PreferredContactMethod'
   */
  export type EnumPreferredContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredContactMethod'>
    


  /**
   * Reference to a field of type 'PreferredContactMethod[]'
   */
  export type ListEnumPreferredContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredContactMethod[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Make'
   */
  export type EnumMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Make'>
    


  /**
   * Reference to a field of type 'Make[]'
   */
  export type ListEnumMakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Make[]'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'Fuel'
   */
  export type EnumFuelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fuel'>
    


  /**
   * Reference to a field of type 'Fuel[]'
   */
  export type ListEnumFuelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fuel[]'>
    


  /**
   * Reference to a field of type 'Drive'
   */
  export type EnumDriveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Drive'>
    


  /**
   * Reference to a field of type 'Drive[]'
   */
  export type ListEnumDriveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Drive[]'>
    


  /**
   * Reference to a field of type 'Transmission'
   */
  export type EnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission'>
    


  /**
   * Reference to a field of type 'Transmission[]'
   */
  export type ListEnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EnquiryStatus'
   */
  export type EnumEnquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnquiryStatus'>
    


  /**
   * Reference to a field of type 'EnquiryStatus[]'
   */
  export type ListEnumEnquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnquiryStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    locationId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    preferredContactMethod?: EnumPreferredContactMethodFilter<"User"> | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFilter<"User"> | boolean
    dateTimeCreated?: DateTimeFilter<"User"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"User"> | Date | string
    favourites?: SellCarListRelationFilter
    carSales?: SellCarListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewer?: ReviewListRelationFilter
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    enquiries?: EnquiryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    preferredContactMethod?: SortOrder
    isProfileSetup?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    favourites?: SellCarOrderByRelationAggregateInput
    carSales?: SellCarOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    reviewer?: ReviewOrderByRelationAggregateInput
    location?: LocationOrderByWithRelationInput
    enquiries?: EnquiryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    locationId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    preferredContactMethod?: EnumPreferredContactMethodFilter<"User"> | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFilter<"User"> | boolean
    dateTimeCreated?: DateTimeFilter<"User"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"User"> | Date | string
    favourites?: SellCarListRelationFilter
    carSales?: SellCarListRelationFilter
    orders?: OrderListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewer?: ReviewListRelationFilter
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    enquiries?: EnquiryListRelationFilter
  }, "id" | "cognitoId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    preferredContactMethod?: SortOrder
    isProfileSetup?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    cognitoId?: StringWithAggregatesFilter<"User"> | string
    locationId?: IntNullableWithAggregatesFilter<"User"> | number | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringWithAggregatesFilter<"User"> | string
    preferredContactMethod?: EnumPreferredContactMethodWithAggregatesFilter<"User"> | $Enums.PreferredContactMethod
    isProfileSetup?: BoolWithAggregatesFilter<"User"> | boolean
    dateTimeCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    dateTimeCreated?: DateTimeFilter<"Location"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Location"> | Date | string
    users?: UserListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    dateTimeCreated?: DateTimeFilter<"Location"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Location"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: IntFilter<"Car"> | number
    make?: EnumMakeFilter<"Car"> | $Enums.Make
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    type?: EnumTypeFilter<"Car"> | $Enums.Type
    fuel?: EnumFuelFilter<"Car"> | $Enums.Fuel
    drive?: EnumDriveFilter<"Car"> | $Enums.Drive
    transmission?: EnumTransmissionFilter<"Car"> | $Enums.Transmission
    dateTimeCreated?: DateTimeFilter<"Car"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Car"> | Date | string
    sellCars?: SellCarListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    type?: SortOrder
    fuel?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    sellCars?: SellCarOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    make_model_year_type_fuel_drive_transmission?: CarMakeModelYearTypeFuelDriveTransmissionCompoundUniqueInput
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    make?: EnumMakeFilter<"Car"> | $Enums.Make
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    type?: EnumTypeFilter<"Car"> | $Enums.Type
    fuel?: EnumFuelFilter<"Car"> | $Enums.Fuel
    drive?: EnumDriveFilter<"Car"> | $Enums.Drive
    transmission?: EnumTransmissionFilter<"Car"> | $Enums.Transmission
    dateTimeCreated?: DateTimeFilter<"Car"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Car"> | Date | string
    sellCars?: SellCarListRelationFilter
  }, "id" | "make_model_year_type_fuel_drive_transmission">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    type?: SortOrder
    fuel?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Car"> | number
    make?: EnumMakeWithAggregatesFilter<"Car"> | $Enums.Make
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    type?: EnumTypeWithAggregatesFilter<"Car"> | $Enums.Type
    fuel?: EnumFuelWithAggregatesFilter<"Car"> | $Enums.Fuel
    drive?: EnumDriveWithAggregatesFilter<"Car"> | $Enums.Drive
    transmission?: EnumTransmissionWithAggregatesFilter<"Car"> | $Enums.Transmission
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type SellCarWhereInput = {
    AND?: SellCarWhereInput | SellCarWhereInput[]
    OR?: SellCarWhereInput[]
    NOT?: SellCarWhereInput | SellCarWhereInput[]
    id?: IntFilter<"SellCar"> | number
    vin?: StringFilter<"SellCar"> | string
    sellerCognitoId?: StringFilter<"SellCar"> | string
    carId?: IntFilter<"SellCar"> | number
    mileage?: IntFilter<"SellCar"> | number
    price?: FloatFilter<"SellCar"> | number
    photoUrls?: StringNullableListFilter<"SellCar">
    description?: StringFilter<"SellCar"> | string
    isPublic?: BoolFilter<"SellCar"> | boolean
    dateTimeCreated?: DateTimeFilter<"SellCar"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SellCar"> | Date | string
    enquiries?: EnquiryListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    favouritedBy?: UserListRelationFilter
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type SellCarOrderByWithRelationInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    enquiries?: EnquiryOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
    favouritedBy?: UserOrderByRelationAggregateInput
    seller?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type SellCarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vin?: string
    AND?: SellCarWhereInput | SellCarWhereInput[]
    OR?: SellCarWhereInput[]
    NOT?: SellCarWhereInput | SellCarWhereInput[]
    sellerCognitoId?: StringFilter<"SellCar"> | string
    carId?: IntFilter<"SellCar"> | number
    mileage?: IntFilter<"SellCar"> | number
    price?: FloatFilter<"SellCar"> | number
    photoUrls?: StringNullableListFilter<"SellCar">
    description?: StringFilter<"SellCar"> | string
    isPublic?: BoolFilter<"SellCar"> | boolean
    dateTimeCreated?: DateTimeFilter<"SellCar"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SellCar"> | Date | string
    enquiries?: EnquiryListRelationFilter
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
    favouritedBy?: UserListRelationFilter
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id" | "vin">

  export type SellCarOrderByWithAggregationInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: SellCarCountOrderByAggregateInput
    _avg?: SellCarAvgOrderByAggregateInput
    _max?: SellCarMaxOrderByAggregateInput
    _min?: SellCarMinOrderByAggregateInput
    _sum?: SellCarSumOrderByAggregateInput
  }

  export type SellCarScalarWhereWithAggregatesInput = {
    AND?: SellCarScalarWhereWithAggregatesInput | SellCarScalarWhereWithAggregatesInput[]
    OR?: SellCarScalarWhereWithAggregatesInput[]
    NOT?: SellCarScalarWhereWithAggregatesInput | SellCarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SellCar"> | number
    vin?: StringWithAggregatesFilter<"SellCar"> | string
    sellerCognitoId?: StringWithAggregatesFilter<"SellCar"> | string
    carId?: IntWithAggregatesFilter<"SellCar"> | number
    mileage?: IntWithAggregatesFilter<"SellCar"> | number
    price?: FloatWithAggregatesFilter<"SellCar"> | number
    photoUrls?: StringNullableListFilter<"SellCar">
    description?: StringWithAggregatesFilter<"SellCar"> | string
    isPublic?: BoolWithAggregatesFilter<"SellCar"> | boolean
    dateTimeCreated?: DateTimeWithAggregatesFilter<"SellCar"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"SellCar"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    sellCarId?: IntFilter<"Enquiry"> | number
    buyerCognitoId?: StringFilter<"Enquiry"> | string
    offerPrice?: FloatFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFilter<"Enquiry"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Enquiry"> | Date | string
    sellCar?: XOR<SellCarScalarRelationFilter, SellCarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    offerPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    sellCar?: SellCarOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enquiryId?: EnquiryEnquiryIdCompoundUniqueInput
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    sellCarId?: IntFilter<"Enquiry"> | number
    buyerCognitoId?: StringFilter<"Enquiry"> | string
    offerPrice?: FloatFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFilter<"Enquiry"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Enquiry"> | Date | string
    sellCar?: XOR<SellCarScalarRelationFilter, SellCarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "enquiryId">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    offerPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _avg?: EnquiryAvgOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
    _sum?: EnquirySumOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enquiry"> | number
    sellCarId?: IntWithAggregatesFilter<"Enquiry"> | number
    buyerCognitoId?: StringWithAggregatesFilter<"Enquiry"> | string
    offerPrice?: FloatWithAggregatesFilter<"Enquiry"> | number
    message?: StringWithAggregatesFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusWithAggregatesFilter<"Enquiry"> | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    sellCarId?: IntFilter<"Order"> | number
    buyerCognitoId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Order"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Order"> | Date | string
    sellCar?: XOR<SellCarScalarRelationFilter, SellCarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    sellCar?: SellCarOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sellCarId?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    buyerCognitoId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Order"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Order"> | Date | string
    sellCar?: XOR<SellCarScalarRelationFilter, SellCarWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "sellCarId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    sellCarId?: IntWithAggregatesFilter<"Order"> | number
    buyerCognitoId?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    orderId?: IntFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payment"> | number
    dateTimeCreated?: DateTimeFilter<"Payment"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payment"> | number
    dateTimeCreated?: DateTimeFilter<"Payment"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    orderId?: IntWithAggregatesFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userCognitoId?: StringFilter<"Review"> | string
    reviewerCognitoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    dateTimeCreated?: DateTimeFilter<"Review"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    user?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userCognitoId?: StringFilter<"Review"> | string
    reviewerCognitoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    dateTimeCreated?: DateTimeFilter<"Review"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userCognitoId?: StringWithAggregatesFilter<"Review"> | string
    reviewerCognitoId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCars?: SellCarCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: number
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCars?: SellCarUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCars?: SellCarUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCars?: SellCarUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: number
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellCarCreateInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryCreateNestedManyWithoutSellCarInput
    order?: OrderCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserCreateNestedManyWithoutFavouritesInput
    seller: UserCreateNestedOneWithoutCarSalesInput
    car: CarCreateNestedOneWithoutSellCarsInput
  }

  export type SellCarUncheckedCreateInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutSellCarInput
    order?: OrderUncheckedCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SellCarUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUpdateManyWithoutSellCarNestedInput
    order?: OrderUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUpdateManyWithoutFavouritesNestedInput
    seller?: UserUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarUpdateOneRequiredWithoutSellCarsNestedInput
  }

  export type SellCarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutSellCarNestedInput
    order?: OrderUncheckedUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SellCarCreateManyInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SellCarUpdateManyMutationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellCarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCar: SellCarCreateNestedOneWithoutEnquiriesInput
    buyer: UserCreateNestedOneWithoutEnquiriesInput
  }

  export type EnquiryUncheckedCreateInput = {
    id?: number
    sellCarId: number
    buyerCognitoId: string
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryUpdateInput = {
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCar?: SellCarUpdateOneRequiredWithoutEnquiriesNestedInput
    buyer?: UserUpdateOneRequiredWithoutEnquiriesNestedInput
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: number
    sellCarId: number
    buyerCognitoId: string
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCar: SellCarCreateNestedOneWithoutOrderInput
    buyer: UserCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    sellCarId: number
    buyerCognitoId: string
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCar?: SellCarUpdateOneRequiredWithoutOrderNestedInput
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    sellCarId: number
    buyerCognitoId: string
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentUpdateInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewerInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userCognitoId: string
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewerNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userCognitoId: string
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPreferredContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredContactMethod | EnumPreferredContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredContactMethodFilter<$PrismaModel> | $Enums.PreferredContactMethod
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SellCarListRelationFilter = {
    every?: SellCarWhereInput
    some?: SellCarWhereInput
    none?: SellCarWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type EnquiryListRelationFilter = {
    every?: EnquiryWhereInput
    some?: EnquiryWhereInput
    none?: EnquiryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SellCarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    preferredContactMethod?: SortOrder
    isProfileSetup?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    preferredContactMethod?: SortOrder
    isProfileSetup?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatarUrl?: SortOrder
    preferredContactMethod?: SortOrder
    isProfileSetup?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPreferredContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredContactMethod | EnumPreferredContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.PreferredContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredContactMethodFilter<$PrismaModel>
    _max?: NestedEnumPreferredContactMethodFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeFilter<$PrismaModel> | $Enums.Make
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type EnumFuelFilter<$PrismaModel = never> = {
    equals?: $Enums.Fuel | EnumFuelFieldRefInput<$PrismaModel>
    in?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelFilter<$PrismaModel> | $Enums.Fuel
  }

  export type EnumDriveFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveFilter<$PrismaModel> | $Enums.Drive
  }

  export type EnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission
  }

  export type CarMakeModelYearTypeFuelDriveTransmissionCompoundUniqueInput = {
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    type?: SortOrder
    fuel?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    type?: SortOrder
    fuel?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    type?: SortOrder
    fuel?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type EnumMakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeWithAggregatesFilter<$PrismaModel> | $Enums.Make
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMakeFilter<$PrismaModel>
    _max?: NestedEnumMakeFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumFuelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fuel | EnumFuelFieldRefInput<$PrismaModel>
    in?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelWithAggregatesFilter<$PrismaModel> | $Enums.Fuel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelFilter<$PrismaModel>
    _max?: NestedEnumFuelFilter<$PrismaModel>
  }

  export type EnumDriveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveWithAggregatesFilter<$PrismaModel> | $Enums.Drive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveFilter<$PrismaModel>
    _max?: NestedEnumDriveFilter<$PrismaModel>
  }

  export type EnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionFilter<$PrismaModel>
    _max?: NestedEnumTransmissionFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type SellCarCountOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SellCarAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
  }

  export type SellCarMaxOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SellCarMinOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SellCarSumOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumEnquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnquiryStatusFilter<$PrismaModel> | $Enums.EnquiryStatus
  }

  export type SellCarScalarRelationFilter = {
    is?: SellCarWhereInput
    isNot?: SellCarWhereInput
  }

  export type EnquiryEnquiryIdCompoundUniqueInput = {
    sellCarId: number
    buyerCognitoId: string
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    offerPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type EnquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    offerPrice?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    offerPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    offerPrice?: SortOrder
    message?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type EnquirySumOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    offerPrice?: SortOrder
  }

  export type EnumEnquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumEnquiryStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    sellCarId?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type SellCarCreateNestedManyWithoutFavouritedByInput = {
    create?: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput> | SellCarCreateWithoutFavouritedByInput[] | SellCarUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutFavouritedByInput | SellCarCreateOrConnectWithoutFavouritedByInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type SellCarCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput> | SellCarCreateWithoutSellerInput[] | SellCarUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutSellerInput | SellCarCreateOrConnectWithoutSellerInput[]
    createMany?: SellCarCreateManySellerInputEnvelope
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutUsersInput = {
    connect?: LocationWhereUniqueInput
  }

  export type EnquiryCreateNestedManyWithoutBuyerInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type SellCarUncheckedCreateNestedManyWithoutFavouritedByInput = {
    create?: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput> | SellCarCreateWithoutFavouritedByInput[] | SellCarUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutFavouritedByInput | SellCarCreateOrConnectWithoutFavouritedByInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type SellCarUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput> | SellCarCreateWithoutSellerInput[] | SellCarUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutSellerInput | SellCarCreateOrConnectWithoutSellerInput[]
    createMany?: SellCarCreateManySellerInputEnvelope
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnquiryUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPreferredContactMethodFieldUpdateOperationsInput = {
    set?: $Enums.PreferredContactMethod
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SellCarUpdateManyWithoutFavouritedByNestedInput = {
    create?: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput> | SellCarCreateWithoutFavouritedByInput[] | SellCarUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutFavouritedByInput | SellCarCreateOrConnectWithoutFavouritedByInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutFavouritedByInput | SellCarUpsertWithWhereUniqueWithoutFavouritedByInput[]
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutFavouritedByInput | SellCarUpdateWithWhereUniqueWithoutFavouritedByInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutFavouritedByInput | SellCarUpdateManyWithWhereWithoutFavouritedByInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type SellCarUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput> | SellCarCreateWithoutSellerInput[] | SellCarUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutSellerInput | SellCarCreateOrConnectWithoutSellerInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutSellerInput | SellCarUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellCarCreateManySellerInputEnvelope
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutSellerInput | SellCarUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutSellerInput | SellCarUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LocationUpdateOneWithoutUsersNestedInput = {
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUsersInput, LocationUpdateWithoutUsersInput>, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type EnquiryUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutBuyerInput | EnquiryUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutBuyerInput | EnquiryUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutBuyerInput | EnquiryUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput = {
    create?: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput> | SellCarCreateWithoutFavouritedByInput[] | SellCarUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutFavouritedByInput | SellCarCreateOrConnectWithoutFavouritedByInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutFavouritedByInput | SellCarUpsertWithWhereUniqueWithoutFavouritedByInput[]
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutFavouritedByInput | SellCarUpdateWithWhereUniqueWithoutFavouritedByInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutFavouritedByInput | SellCarUpdateManyWithWhereWithoutFavouritedByInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type SellCarUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput> | SellCarCreateWithoutSellerInput[] | SellCarUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutSellerInput | SellCarCreateOrConnectWithoutSellerInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutSellerInput | SellCarUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellCarCreateManySellerInputEnvelope
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutSellerInput | SellCarUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutSellerInput | SellCarUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EnquiryUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput> | EnquiryCreateWithoutBuyerInput[] | EnquiryUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutBuyerInput | EnquiryCreateOrConnectWithoutBuyerInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutBuyerInput | EnquiryUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: EnquiryCreateManyBuyerInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutBuyerInput | EnquiryUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutBuyerInput | EnquiryUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput> | UserCreateWithoutLocationInput[] | UserUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput | UserCreateOrConnectWithoutLocationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLocationInput | UserUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserCreateManyLocationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLocationInput | UserUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLocationInput | UserUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput> | UserCreateWithoutLocationInput[] | UserUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput | UserCreateOrConnectWithoutLocationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLocationInput | UserUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: UserCreateManyLocationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLocationInput | UserUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLocationInput | UserUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SellCarCreateNestedManyWithoutCarInput = {
    create?: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput> | SellCarCreateWithoutCarInput[] | SellCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutCarInput | SellCarCreateOrConnectWithoutCarInput[]
    createMany?: SellCarCreateManyCarInputEnvelope
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type SellCarUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput> | SellCarCreateWithoutCarInput[] | SellCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutCarInput | SellCarCreateOrConnectWithoutCarInput[]
    createMany?: SellCarCreateManyCarInputEnvelope
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
  }

  export type EnumMakeFieldUpdateOperationsInput = {
    set?: $Enums.Make
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type EnumFuelFieldUpdateOperationsInput = {
    set?: $Enums.Fuel
  }

  export type EnumDriveFieldUpdateOperationsInput = {
    set?: $Enums.Drive
  }

  export type EnumTransmissionFieldUpdateOperationsInput = {
    set?: $Enums.Transmission
  }

  export type SellCarUpdateManyWithoutCarNestedInput = {
    create?: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput> | SellCarCreateWithoutCarInput[] | SellCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutCarInput | SellCarCreateOrConnectWithoutCarInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutCarInput | SellCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: SellCarCreateManyCarInputEnvelope
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutCarInput | SellCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutCarInput | SellCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type SellCarUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput> | SellCarCreateWithoutCarInput[] | SellCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SellCarCreateOrConnectWithoutCarInput | SellCarCreateOrConnectWithoutCarInput[]
    upsert?: SellCarUpsertWithWhereUniqueWithoutCarInput | SellCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: SellCarCreateManyCarInputEnvelope
    set?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    disconnect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    delete?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    connect?: SellCarWhereUniqueInput | SellCarWhereUniqueInput[]
    update?: SellCarUpdateWithWhereUniqueWithoutCarInput | SellCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: SellCarUpdateManyWithWhereWithoutCarInput | SellCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
  }

  export type SellCarCreatephotoUrlsInput = {
    set: string[]
  }

  export type EnquiryCreateNestedManyWithoutSellCarInput = {
    create?: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput> | EnquiryCreateWithoutSellCarInput[] | EnquiryUncheckedCreateWithoutSellCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellCarInput | EnquiryCreateOrConnectWithoutSellCarInput[]
    createMany?: EnquiryCreateManySellCarInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutSellCarInput = {
    create?: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSellCarInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCarSalesInput = {
    create?: XOR<UserCreateWithoutCarSalesInput, UserUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarSalesInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutSellCarsInput = {
    create?: XOR<CarCreateWithoutSellCarsInput, CarUncheckedCreateWithoutSellCarsInput>
    connectOrCreate?: CarCreateOrConnectWithoutSellCarsInput
    connect?: CarWhereUniqueInput
  }

  export type EnquiryUncheckedCreateNestedManyWithoutSellCarInput = {
    create?: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput> | EnquiryCreateWithoutSellCarInput[] | EnquiryUncheckedCreateWithoutSellCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellCarInput | EnquiryCreateOrConnectWithoutSellCarInput[]
    createMany?: EnquiryCreateManySellCarInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedOneWithoutSellCarInput = {
    create?: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSellCarInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SellCarUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnquiryUpdateManyWithoutSellCarNestedInput = {
    create?: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput> | EnquiryCreateWithoutSellCarInput[] | EnquiryUncheckedCreateWithoutSellCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellCarInput | EnquiryCreateOrConnectWithoutSellCarInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutSellCarInput | EnquiryUpsertWithWhereUniqueWithoutSellCarInput[]
    createMany?: EnquiryCreateManySellCarInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutSellCarInput | EnquiryUpdateWithWhereUniqueWithoutSellCarInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutSellCarInput | EnquiryUpdateManyWithWhereWithoutSellCarInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type OrderUpdateOneWithoutSellCarNestedInput = {
    create?: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSellCarInput
    upsert?: OrderUpsertWithoutSellCarInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSellCarInput, OrderUpdateWithoutSellCarInput>, OrderUncheckedUpdateWithoutSellCarInput>
  }

  export type UserUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouritesInput | UserUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouritesInput | UserUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouritesInput | UserUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCarSalesNestedInput = {
    create?: XOR<UserCreateWithoutCarSalesInput, UserUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarSalesInput
    upsert?: UserUpsertWithoutCarSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarSalesInput, UserUpdateWithoutCarSalesInput>, UserUncheckedUpdateWithoutCarSalesInput>
  }

  export type CarUpdateOneRequiredWithoutSellCarsNestedInput = {
    create?: XOR<CarCreateWithoutSellCarsInput, CarUncheckedCreateWithoutSellCarsInput>
    connectOrCreate?: CarCreateOrConnectWithoutSellCarsInput
    upsert?: CarUpsertWithoutSellCarsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSellCarsInput, CarUpdateWithoutSellCarsInput>, CarUncheckedUpdateWithoutSellCarsInput>
  }

  export type EnquiryUncheckedUpdateManyWithoutSellCarNestedInput = {
    create?: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput> | EnquiryCreateWithoutSellCarInput[] | EnquiryUncheckedCreateWithoutSellCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutSellCarInput | EnquiryCreateOrConnectWithoutSellCarInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutSellCarInput | EnquiryUpsertWithWhereUniqueWithoutSellCarInput[]
    createMany?: EnquiryCreateManySellCarInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutSellCarInput | EnquiryUpdateWithWhereUniqueWithoutSellCarInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutSellCarInput | EnquiryUpdateManyWithWhereWithoutSellCarInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type OrderUncheckedUpdateOneWithoutSellCarNestedInput = {
    create?: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSellCarInput
    upsert?: OrderUpsertWithoutSellCarInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSellCarInput, OrderUpdateWithoutSellCarInput>, OrderUncheckedUpdateWithoutSellCarInput>
  }

  export type UserUncheckedUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput> | UserCreateWithoutFavouritesInput[] | UserUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | UserCreateOrConnectWithoutFavouritesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouritesInput | UserUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouritesInput | UserUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouritesInput | UserUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SellCarCreateNestedOneWithoutEnquiriesInput = {
    create?: XOR<SellCarCreateWithoutEnquiriesInput, SellCarUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: SellCarCreateOrConnectWithoutEnquiriesInput
    connect?: SellCarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnquiriesInput = {
    create?: XOR<UserCreateWithoutEnquiriesInput, UserUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEnquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnquiryStatus
  }

  export type SellCarUpdateOneRequiredWithoutEnquiriesNestedInput = {
    create?: XOR<SellCarCreateWithoutEnquiriesInput, SellCarUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: SellCarCreateOrConnectWithoutEnquiriesInput
    upsert?: SellCarUpsertWithoutEnquiriesInput
    connect?: SellCarWhereUniqueInput
    update?: XOR<XOR<SellCarUpdateToOneWithWhereWithoutEnquiriesInput, SellCarUpdateWithoutEnquiriesInput>, SellCarUncheckedUpdateWithoutEnquiriesInput>
  }

  export type UserUpdateOneRequiredWithoutEnquiriesNestedInput = {
    create?: XOR<UserCreateWithoutEnquiriesInput, UserUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnquiriesInput
    upsert?: UserUpsertWithoutEnquiriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnquiriesInput, UserUpdateWithoutEnquiriesInput>, UserUncheckedUpdateWithoutEnquiriesInput>
  }

  export type SellCarCreateNestedOneWithoutOrderInput = {
    create?: XOR<SellCarCreateWithoutOrderInput, SellCarUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SellCarCreateOrConnectWithoutOrderInput
    connect?: SellCarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type SellCarUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<SellCarCreateWithoutOrderInput, SellCarUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SellCarCreateOrConnectWithoutOrderInput
    upsert?: SellCarUpsertWithoutOrderInput
    connect?: SellCarWhereUniqueInput
    update?: XOR<XOR<SellCarUpdateToOneWithWhereWithoutOrderInput, SellCarUpdateWithoutOrderInput>, SellCarUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewerInput = {
    create?: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewerNestedInput = {
    create?: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewerInput
    upsert?: UserUpsertWithoutReviewerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewerInput, UserUpdateWithoutReviewerInput>, UserUncheckedUpdateWithoutReviewerInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPreferredContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredContactMethod | EnumPreferredContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredContactMethodFilter<$PrismaModel> | $Enums.PreferredContactMethod
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPreferredContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredContactMethod | EnumPreferredContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredContactMethod[] | ListEnumPreferredContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.PreferredContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredContactMethodFilter<$PrismaModel>
    _max?: NestedEnumPreferredContactMethodFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeFilter<$PrismaModel> | $Enums.Make
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumFuelFilter<$PrismaModel = never> = {
    equals?: $Enums.Fuel | EnumFuelFieldRefInput<$PrismaModel>
    in?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelFilter<$PrismaModel> | $Enums.Fuel
  }

  export type NestedEnumDriveFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveFilter<$PrismaModel> | $Enums.Drive
  }

  export type NestedEnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission
  }

  export type NestedEnumMakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Make | EnumMakeFieldRefInput<$PrismaModel>
    in?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Make[] | ListEnumMakeFieldRefInput<$PrismaModel>
    not?: NestedEnumMakeWithAggregatesFilter<$PrismaModel> | $Enums.Make
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMakeFilter<$PrismaModel>
    _max?: NestedEnumMakeFilter<$PrismaModel>
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumFuelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fuel | EnumFuelFieldRefInput<$PrismaModel>
    in?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fuel[] | ListEnumFuelFieldRefInput<$PrismaModel>
    not?: NestedEnumFuelWithAggregatesFilter<$PrismaModel> | $Enums.Fuel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelFilter<$PrismaModel>
    _max?: NestedEnumFuelFilter<$PrismaModel>
  }

  export type NestedEnumDriveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Drive | EnumDriveFieldRefInput<$PrismaModel>
    in?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    notIn?: $Enums.Drive[] | ListEnumDriveFieldRefInput<$PrismaModel>
    not?: NestedEnumDriveWithAggregatesFilter<$PrismaModel> | $Enums.Drive
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriveFilter<$PrismaModel>
    _max?: NestedEnumDriveFilter<$PrismaModel>
  }

  export type NestedEnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel>
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransmissionFilter<$PrismaModel>
    _max?: NestedEnumTransmissionFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumEnquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnquiryStatusFilter<$PrismaModel> | $Enums.EnquiryStatus
  }

  export type NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnquiryStatus | EnumEnquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnquiryStatus[] | ListEnumEnquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumEnquiryStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type SellCarCreateWithoutFavouritedByInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryCreateNestedManyWithoutSellCarInput
    order?: OrderCreateNestedOneWithoutSellCarInput
    seller: UserCreateNestedOneWithoutCarSalesInput
    car: CarCreateNestedOneWithoutSellCarsInput
  }

  export type SellCarUncheckedCreateWithoutFavouritedByInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutSellCarInput
    order?: OrderUncheckedCreateNestedOneWithoutSellCarInput
  }

  export type SellCarCreateOrConnectWithoutFavouritedByInput = {
    where: SellCarWhereUniqueInput
    create: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput>
  }

  export type SellCarCreateWithoutSellerInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryCreateNestedManyWithoutSellCarInput
    order?: OrderCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserCreateNestedManyWithoutFavouritesInput
    car: CarCreateNestedOneWithoutSellCarsInput
  }

  export type SellCarUncheckedCreateWithoutSellerInput = {
    id?: number
    vin: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutSellCarInput
    order?: OrderUncheckedCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SellCarCreateOrConnectWithoutSellerInput = {
    where: SellCarWhereUniqueInput
    create: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput>
  }

  export type SellCarCreateManySellerInputEnvelope = {
    data: SellCarCreateManySellerInput | SellCarCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutBuyerInput = {
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCar: SellCarCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: number
    sellCarId: number
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewerInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: number
    userCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type EnquiryCreateWithoutBuyerInput = {
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCar: SellCarCreateNestedOneWithoutEnquiriesInput
  }

  export type EnquiryUncheckedCreateWithoutBuyerInput = {
    id?: number
    sellCarId: number
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput>
  }

  export type EnquiryCreateManyBuyerInputEnvelope = {
    data: EnquiryCreateManyBuyerInput | EnquiryCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type SellCarUpsertWithWhereUniqueWithoutFavouritedByInput = {
    where: SellCarWhereUniqueInput
    update: XOR<SellCarUpdateWithoutFavouritedByInput, SellCarUncheckedUpdateWithoutFavouritedByInput>
    create: XOR<SellCarCreateWithoutFavouritedByInput, SellCarUncheckedCreateWithoutFavouritedByInput>
  }

  export type SellCarUpdateWithWhereUniqueWithoutFavouritedByInput = {
    where: SellCarWhereUniqueInput
    data: XOR<SellCarUpdateWithoutFavouritedByInput, SellCarUncheckedUpdateWithoutFavouritedByInput>
  }

  export type SellCarUpdateManyWithWhereWithoutFavouritedByInput = {
    where: SellCarScalarWhereInput
    data: XOR<SellCarUpdateManyMutationInput, SellCarUncheckedUpdateManyWithoutFavouritedByInput>
  }

  export type SellCarScalarWhereInput = {
    AND?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
    OR?: SellCarScalarWhereInput[]
    NOT?: SellCarScalarWhereInput | SellCarScalarWhereInput[]
    id?: IntFilter<"SellCar"> | number
    vin?: StringFilter<"SellCar"> | string
    sellerCognitoId?: StringFilter<"SellCar"> | string
    carId?: IntFilter<"SellCar"> | number
    mileage?: IntFilter<"SellCar"> | number
    price?: FloatFilter<"SellCar"> | number
    photoUrls?: StringNullableListFilter<"SellCar">
    description?: StringFilter<"SellCar"> | string
    isPublic?: BoolFilter<"SellCar"> | boolean
    dateTimeCreated?: DateTimeFilter<"SellCar"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SellCar"> | Date | string
  }

  export type SellCarUpsertWithWhereUniqueWithoutSellerInput = {
    where: SellCarWhereUniqueInput
    update: XOR<SellCarUpdateWithoutSellerInput, SellCarUncheckedUpdateWithoutSellerInput>
    create: XOR<SellCarCreateWithoutSellerInput, SellCarUncheckedCreateWithoutSellerInput>
  }

  export type SellCarUpdateWithWhereUniqueWithoutSellerInput = {
    where: SellCarWhereUniqueInput
    data: XOR<SellCarUpdateWithoutSellerInput, SellCarUncheckedUpdateWithoutSellerInput>
  }

  export type SellCarUpdateManyWithWhereWithoutSellerInput = {
    where: SellCarScalarWhereInput
    data: XOR<SellCarUpdateManyMutationInput, SellCarUncheckedUpdateManyWithoutSellerInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    sellCarId?: IntFilter<"Order"> | number
    buyerCognitoId?: StringFilter<"Order"> | string
    totalAmount?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Order"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Order"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userCognitoId?: StringFilter<"Review"> | string
    reviewerCognitoId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    dateTimeCreated?: DateTimeFilter<"Review"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type LocationUpdateToOneWithWhereWithoutUsersInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type LocationUpdateWithoutUsersInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUpsertWithWhereUniqueWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutBuyerInput, EnquiryUncheckedUpdateWithoutBuyerInput>
    create: XOR<EnquiryCreateWithoutBuyerInput, EnquiryUncheckedCreateWithoutBuyerInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutBuyerInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutBuyerInput, EnquiryUncheckedUpdateWithoutBuyerInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutBuyerInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutBuyerInput>
  }

  export type EnquiryScalarWhereInput = {
    AND?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    OR?: EnquiryScalarWhereInput[]
    NOT?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    id?: IntFilter<"Enquiry"> | number
    sellCarId?: IntFilter<"Enquiry"> | number
    buyerCognitoId?: StringFilter<"Enquiry"> | string
    offerPrice?: FloatFilter<"Enquiry"> | number
    message?: StringFilter<"Enquiry"> | string
    status?: EnumEnquiryStatusFilter<"Enquiry"> | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFilter<"Enquiry"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type UserCreateWithoutLocationInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id?: number
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLocationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserCreateManyLocationInputEnvelope = {
    data: UserCreateManyLocationInput | UserCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpdateWithWhereUniqueWithoutLocationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateManyWithWhereWithoutLocationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    cognitoId?: StringFilter<"User"> | string
    locationId?: IntNullableFilter<"User"> | number | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    preferredContactMethod?: EnumPreferredContactMethodFilter<"User"> | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFilter<"User"> | boolean
    dateTimeCreated?: DateTimeFilter<"User"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"User"> | Date | string
  }

  export type SellCarCreateWithoutCarInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryCreateNestedManyWithoutSellCarInput
    order?: OrderCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserCreateNestedManyWithoutFavouritesInput
    seller: UserCreateNestedOneWithoutCarSalesInput
  }

  export type SellCarUncheckedCreateWithoutCarInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutSellCarInput
    order?: OrderUncheckedCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SellCarCreateOrConnectWithoutCarInput = {
    where: SellCarWhereUniqueInput
    create: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput>
  }

  export type SellCarCreateManyCarInputEnvelope = {
    data: SellCarCreateManyCarInput | SellCarCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type SellCarUpsertWithWhereUniqueWithoutCarInput = {
    where: SellCarWhereUniqueInput
    update: XOR<SellCarUpdateWithoutCarInput, SellCarUncheckedUpdateWithoutCarInput>
    create: XOR<SellCarCreateWithoutCarInput, SellCarUncheckedCreateWithoutCarInput>
  }

  export type SellCarUpdateWithWhereUniqueWithoutCarInput = {
    where: SellCarWhereUniqueInput
    data: XOR<SellCarUpdateWithoutCarInput, SellCarUncheckedUpdateWithoutCarInput>
  }

  export type SellCarUpdateManyWithWhereWithoutCarInput = {
    where: SellCarScalarWhereInput
    data: XOR<SellCarUpdateManyMutationInput, SellCarUncheckedUpdateManyWithoutCarInput>
  }

  export type EnquiryCreateWithoutSellCarInput = {
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    buyer: UserCreateNestedOneWithoutEnquiriesInput
  }

  export type EnquiryUncheckedCreateWithoutSellCarInput = {
    id?: number
    buyerCognitoId: string
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutSellCarInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput>
  }

  export type EnquiryCreateManySellCarInputEnvelope = {
    data: EnquiryCreateManySellCarInput | EnquiryCreateManySellCarInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSellCarInput = {
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSellCarInput = {
    id?: number
    buyerCognitoId: string
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSellCarInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
  }

  export type UserCreateWithoutFavouritesInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type UserCreateWithoutCarSalesInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutCarSalesInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutCarSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarSalesInput, UserUncheckedCreateWithoutCarSalesInput>
  }

  export type CarCreateWithoutSellCarsInput = {
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarUncheckedCreateWithoutSellCarsInput = {
    id?: number
    make: $Enums.Make
    model: string
    year: number
    type: $Enums.Type
    fuel: $Enums.Fuel
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarCreateOrConnectWithoutSellCarsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSellCarsInput, CarUncheckedCreateWithoutSellCarsInput>
  }

  export type EnquiryUpsertWithWhereUniqueWithoutSellCarInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutSellCarInput, EnquiryUncheckedUpdateWithoutSellCarInput>
    create: XOR<EnquiryCreateWithoutSellCarInput, EnquiryUncheckedCreateWithoutSellCarInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutSellCarInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutSellCarInput, EnquiryUncheckedUpdateWithoutSellCarInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutSellCarInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutSellCarInput>
  }

  export type OrderUpsertWithoutSellCarInput = {
    update: XOR<OrderUpdateWithoutSellCarInput, OrderUncheckedUpdateWithoutSellCarInput>
    create: XOR<OrderCreateWithoutSellCarInput, OrderUncheckedCreateWithoutSellCarInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutSellCarInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutSellCarInput, OrderUncheckedUpdateWithoutSellCarInput>
  }

  export type OrderUpdateWithoutSellCarInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSellCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateManyWithWhereWithoutFavouritesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavouritesInput>
  }

  export type UserUpsertWithoutCarSalesInput = {
    update: XOR<UserUpdateWithoutCarSalesInput, UserUncheckedUpdateWithoutCarSalesInput>
    create: XOR<UserCreateWithoutCarSalesInput, UserUncheckedCreateWithoutCarSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarSalesInput, UserUncheckedUpdateWithoutCarSalesInput>
  }

  export type UserUpdateWithoutCarSalesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutCarSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type CarUpsertWithoutSellCarsInput = {
    update: XOR<CarUpdateWithoutSellCarsInput, CarUncheckedUpdateWithoutSellCarsInput>
    create: XOR<CarCreateWithoutSellCarsInput, CarUncheckedCreateWithoutSellCarsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSellCarsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSellCarsInput, CarUncheckedUpdateWithoutSellCarsInput>
  }

  export type CarUpdateWithoutSellCarsInput = {
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateWithoutSellCarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: EnumMakeFieldUpdateOperationsInput | $Enums.Make
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellCarCreateWithoutEnquiriesInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrderCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserCreateNestedManyWithoutFavouritesInput
    seller: UserCreateNestedOneWithoutCarSalesInput
    car: CarCreateNestedOneWithoutSellCarsInput
  }

  export type SellCarUncheckedCreateWithoutEnquiriesInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrderUncheckedCreateNestedOneWithoutSellCarInput
    favouritedBy?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SellCarCreateOrConnectWithoutEnquiriesInput = {
    where: SellCarWhereUniqueInput
    create: XOR<SellCarCreateWithoutEnquiriesInput, SellCarUncheckedCreateWithoutEnquiriesInput>
  }

  export type UserCreateWithoutEnquiriesInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEnquiriesInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutEnquiriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnquiriesInput, UserUncheckedCreateWithoutEnquiriesInput>
  }

  export type SellCarUpsertWithoutEnquiriesInput = {
    update: XOR<SellCarUpdateWithoutEnquiriesInput, SellCarUncheckedUpdateWithoutEnquiriesInput>
    create: XOR<SellCarCreateWithoutEnquiriesInput, SellCarUncheckedCreateWithoutEnquiriesInput>
    where?: SellCarWhereInput
  }

  export type SellCarUpdateToOneWithWhereWithoutEnquiriesInput = {
    where?: SellCarWhereInput
    data: XOR<SellCarUpdateWithoutEnquiriesInput, SellCarUncheckedUpdateWithoutEnquiriesInput>
  }

  export type SellCarUpdateWithoutEnquiriesInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUpdateManyWithoutFavouritesNestedInput
    seller?: UserUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarUpdateOneRequiredWithoutSellCarsNestedInput
  }

  export type SellCarUncheckedUpdateWithoutEnquiriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUncheckedUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type UserUpsertWithoutEnquiriesInput = {
    update: XOR<UserUpdateWithoutEnquiriesInput, UserUncheckedUpdateWithoutEnquiriesInput>
    create: XOR<UserCreateWithoutEnquiriesInput, UserUncheckedCreateWithoutEnquiriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnquiriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnquiriesInput, UserUncheckedUpdateWithoutEnquiriesInput>
  }

  export type UserUpdateWithoutEnquiriesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEnquiriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type SellCarCreateWithoutOrderInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryCreateNestedManyWithoutSellCarInput
    favouritedBy?: UserCreateNestedManyWithoutFavouritesInput
    seller: UserCreateNestedOneWithoutCarSalesInput
    car: CarCreateNestedOneWithoutSellCarsInput
  }

  export type SellCarUncheckedCreateWithoutOrderInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutSellCarInput
    favouritedBy?: UserUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SellCarCreateOrConnectWithoutOrderInput = {
    where: SellCarWhereUniqueInput
    create: XOR<SellCarCreateWithoutOrderInput, SellCarUncheckedCreateWithoutOrderInput>
  }

  export type UserCreateWithoutOrdersInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus?: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type SellCarUpsertWithoutOrderInput = {
    update: XOR<SellCarUpdateWithoutOrderInput, SellCarUncheckedUpdateWithoutOrderInput>
    create: XOR<SellCarCreateWithoutOrderInput, SellCarUncheckedCreateWithoutOrderInput>
    where?: SellCarWhereInput
  }

  export type SellCarUpdateToOneWithWhereWithoutOrderInput = {
    where?: SellCarWhereInput
    data: XOR<SellCarUpdateWithoutOrderInput, SellCarUncheckedUpdateWithoutOrderInput>
  }

  export type SellCarUpdateWithoutOrderInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUpdateManyWithoutSellCarNestedInput
    favouritedBy?: UserUpdateManyWithoutFavouritesNestedInput
    seller?: UserUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarUpdateOneRequiredWithoutSellCarsNestedInput
  }

  export type SellCarUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutSellCarNestedInput
    favouritedBy?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutPaymentInput = {
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    sellCar: SellCarCreateNestedOneWithoutOrderInput
    buyer: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: number
    sellCarId: number
    buyerCognitoId: string
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCar?: SellCarUpdateOneRequiredWithoutOrderNestedInput
    buyer?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviewer?: ReviewCreateNestedManyWithoutReviewerInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviewer?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewerInput = {
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarCreateNestedManyWithoutSellerInput
    orders?: OrderCreateNestedManyWithoutBuyerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    location?: LocationCreateNestedOneWithoutUsersInput
    enquiries?: EnquiryCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutReviewerInput = {
    id?: number
    cognitoId: string
    locationId?: number | null
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SellCarUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SellCarUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutReviewerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUpsertWithoutReviewerInput = {
    update: XOR<UserUpdateWithoutReviewerInput, UserUncheckedUpdateWithoutReviewerInput>
    create: XOR<UserCreateWithoutReviewerInput, UserUncheckedCreateWithoutReviewerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewerInput, UserUncheckedUpdateWithoutReviewerInput>
  }

  export type UserUpdateWithoutReviewerInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type SellCarCreateManySellerInput = {
    id?: number
    vin: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrderCreateManyBuyerInput = {
    id?: number
    sellCarId: number
    totalAmount: number
    status?: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: number
    userCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryCreateManyBuyerInput = {
    id?: number
    sellCarId: number
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SellCarUpdateWithoutFavouritedByInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUpdateManyWithoutSellCarNestedInput
    order?: OrderUpdateOneWithoutSellCarNestedInput
    seller?: UserUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarUpdateOneRequiredWithoutSellCarsNestedInput
  }

  export type SellCarUncheckedUpdateWithoutFavouritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutSellCarNestedInput
    order?: OrderUncheckedUpdateOneWithoutSellCarNestedInput
  }

  export type SellCarUncheckedUpdateManyWithoutFavouritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellCarUpdateWithoutSellerInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUpdateManyWithoutSellCarNestedInput
    order?: OrderUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUpdateManyWithoutFavouritesNestedInput
    car?: CarUpdateOneRequiredWithoutSellCarsNestedInput
  }

  export type SellCarUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutSellCarNestedInput
    order?: OrderUncheckedUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SellCarUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutBuyerInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCar?: SellCarUpdateOneRequiredWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewerNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUpdateWithoutBuyerInput = {
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    sellCar?: SellCarUpdateOneRequiredWithoutEnquiriesNestedInput
  }

  export type EnquiryUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    sellCarId?: IntFieldUpdateOperationsInput | number
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLocationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SellCarUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateManyLocationInput = {
    id?: number
    cognitoId: string
    firstName?: string
    lastName?: string
    email: string
    phone?: string
    avatarUrl?: string
    preferredContactMethod?: $Enums.PreferredContactMethod
    isProfileSetup?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type UserUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellCarCreateManyCarInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    mileage: number
    price: number
    photoUrls?: SellCarCreatephotoUrlsInput | string[]
    description: string
    isPublic?: boolean
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SellCarUpdateWithoutCarInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUpdateManyWithoutSellCarNestedInput
    order?: OrderUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUpdateManyWithoutFavouritesNestedInput
    seller?: UserUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SellCarUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    enquiries?: EnquiryUncheckedUpdateManyWithoutSellCarNestedInput
    order?: OrderUncheckedUpdateOneWithoutSellCarNestedInput
    favouritedBy?: UserUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SellCarUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SellCarUpdatephotoUrlsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManySellCarInput = {
    id?: number
    buyerCognitoId: string
    offerPrice: number
    message: string
    status?: $Enums.EnquiryStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type EnquiryUpdateWithoutSellCarInput = {
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutEnquiriesNestedInput
  }

  export type EnquiryUncheckedUpdateWithoutSellCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutSellCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    offerPrice?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumEnquiryStatusFieldUpdateOperationsInput | $Enums.EnquiryStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutFavouritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SellCarUpdateManyWithoutSellerNestedInput
    orders?: OrderUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUpdateManyWithoutReviewerNestedInput
    location?: LocationUpdateOneWithoutUsersNestedInput
    enquiries?: EnquiryUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SellCarUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    preferredContactMethod?: EnumPreferredContactMethodFieldUpdateOperationsInput | $Enums.PreferredContactMethod
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}