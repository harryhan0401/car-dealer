
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Cars
 * 
 */
export type Cars = $Result.DefaultSelection<Prisma.$CarsPayload>
/**
 * Model SaleCars
 * 
 */
export type SaleCars = $Result.DefaultSelection<Prisma.$SaleCarsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>

/**
 * Enums
 */
export namespace $Enums {
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
  Denied: 'Denied',
  Confirmed: 'Confirmed',
  Paid: 'Paid'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


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
  Denied: 'Denied'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Fuel = $Enums.Fuel

export const Fuel: typeof $Enums.Fuel

export type Drive = $Enums.Drive

export const Drive: typeof $Enums.Drive

export type Transmission = $Enums.Transmission

export const Transmission: typeof $Enums.Transmission

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.cars`: Exposes CRUD operations for the **Cars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.cars.findMany()
    * ```
    */
  get cars(): Prisma.CarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleCars`: Exposes CRUD operations for the **SaleCars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleCars
    * const saleCars = await prisma.saleCars.findMany()
    * ```
    */
  get saleCars(): Prisma.SaleCarsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    Location: 'Location',
    Cars: 'Cars',
    SaleCars: 'SaleCars',
    Orders: 'Orders',
    Payments: 'Payments',
    Reviews: 'Reviews'
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
      modelProps: "users" | "location" | "cars" | "saleCars" | "orders" | "payments" | "reviews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
      Cars: {
        payload: Prisma.$CarsPayload<ExtArgs>
        fields: Prisma.CarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findFirst: {
            args: Prisma.CarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          findMany: {
            args: Prisma.CarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          create: {
            args: Prisma.CarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          createMany: {
            args: Prisma.CarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          delete: {
            args: Prisma.CarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          update: {
            args: Prisma.CarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          deleteMany: {
            args: Prisma.CarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>[]
          }
          upsert: {
            args: Prisma.CarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarsPayload>
          }
          aggregate: {
            args: Prisma.CarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCars>
          }
          groupBy: {
            args: Prisma.CarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarsCountArgs<ExtArgs>
            result: $Utils.Optional<CarsCountAggregateOutputType> | number
          }
        }
      }
      SaleCars: {
        payload: Prisma.$SaleCarsPayload<ExtArgs>
        fields: Prisma.SaleCarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleCarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleCarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          findFirst: {
            args: Prisma.SaleCarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleCarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          findMany: {
            args: Prisma.SaleCarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>[]
          }
          create: {
            args: Prisma.SaleCarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          createMany: {
            args: Prisma.SaleCarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCarsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>[]
          }
          delete: {
            args: Prisma.SaleCarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          update: {
            args: Prisma.SaleCarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          deleteMany: {
            args: Prisma.SaleCarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleCarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleCarsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>[]
          }
          upsert: {
            args: Prisma.SaleCarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleCarsPayload>
          }
          aggregate: {
            args: Prisma.SaleCarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleCars>
          }
          groupBy: {
            args: Prisma.SaleCarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleCarsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCarsCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCarsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
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
    users?: UsersOmit
    location?: LocationOmit
    cars?: CarsOmit
    saleCars?: SaleCarsOmit
    orders?: OrdersOmit
    payments?: PaymentsOmit
    reviews?: ReviewsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    favourites: number
    carSales: number
    orders: number
    reviews: number
    reviewer: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UsersCountOutputTypeCountFavouritesArgs
    carSales?: boolean | UsersCountOutputTypeCountCarSalesArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    reviewer?: boolean | UsersCountOutputTypeCountReviewerArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleCarsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCarSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleCarsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    Users: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | LocationCountOutputTypeCountUsersArgs
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
    where?: UsersWhereInput
  }


  /**
   * Count Type CarsCountOutputType
   */

  export type CarsCountOutputType = {
    carSales: number
  }

  export type CarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carSales?: boolean | CarsCountOutputTypeCountCarSalesArgs
  }

  // Custom InputTypes
  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarsCountOutputType
     */
    select?: CarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarsCountOutputType without action
   */
  export type CarsCountOutputTypeCountCarSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleCarsWhereInput
  }


  /**
   * Count Type SaleCarsCountOutputType
   */

  export type SaleCarsCountOutputType = {
    favouritedBy: number
  }

  export type SaleCarsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favouritedBy?: boolean | SaleCarsCountOutputTypeCountFavouritedByArgs
  }

  // Custom InputTypes
  /**
   * SaleCarsCountOutputType without action
   */
  export type SaleCarsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCarsCountOutputType
     */
    select?: SaleCarsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCarsCountOutputType without action
   */
  export type SaleCarsCountOutputTypeCountFavouritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    locationId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    locationId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    locationId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    cognitoId: number
    locationId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    locationId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    cognitoId?: true
    locationId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    favourites?: boolean | Users$favouritesArgs<ExtArgs>
    carSales?: boolean | Users$carSalesArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    reviewer?: boolean | Users$reviewerArgs<ExtArgs>
    address?: boolean | LocationDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    address?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    address?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    locationId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "locationId" | "firstName" | "lastName" | "email" | "phone" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | Users$favouritesArgs<ExtArgs>
    carSales?: boolean | Users$carSalesArgs<ExtArgs>
    orders?: boolean | Users$ordersArgs<ExtArgs>
    reviews?: boolean | Users$reviewsArgs<ExtArgs>
    reviewer?: boolean | Users$reviewerArgs<ExtArgs>
    address?: boolean | LocationDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      favourites: Prisma.$SaleCarsPayload<ExtArgs>[]
      carSales: Prisma.$SaleCarsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      reviewer: Prisma.$ReviewsPayload<ExtArgs>[]
      address: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      locationId: number
      firstName: string
      lastName: string
      email: string
      phone: string
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends Users$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, Users$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carSales<T extends Users$carSalesArgs<ExtArgs> = {}>(args?: Subset<T, Users$carSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewer<T extends Users$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Users$reviewerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly cognitoId: FieldRef<"Users", 'String'>
    readonly locationId: FieldRef<"Users", 'Int'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly dateTimeCreated: FieldRef<"Users", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.favourites
   */
  export type Users$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    where?: SaleCarsWhereInput
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    cursor?: SaleCarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * Users.carSales
   */
  export type Users$carSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    where?: SaleCarsWhereInput
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    cursor?: SaleCarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.reviews
   */
  export type Users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.reviewer
   */
  export type Users$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
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
    Users?: boolean | Location$UsersArgs<ExtArgs>
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
    Users?: boolean | Location$UsersArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
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
    Users<T extends Location$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Location$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Location.Users
   */
  export type Location$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
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
   * Model Cars
   */

  export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  export type CarsAvgAggregateOutputType = {
    id: number | null
    year: number | null
    horsePower: number | null
  }

  export type CarsSumAggregateOutputType = {
    id: number | null
    year: number | null
    horsePower: number | null
  }

  export type CarsMinAggregateOutputType = {
    id: number | null
    make: string | null
    model: string | null
    year: number | null
    fuel: $Enums.Fuel | null
    horsePower: number | null
    drive: $Enums.Drive | null
    transmission: $Enums.Transmission | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type CarsMaxAggregateOutputType = {
    id: number | null
    make: string | null
    model: string | null
    year: number | null
    fuel: $Enums.Fuel | null
    horsePower: number | null
    drive: $Enums.Drive | null
    transmission: $Enums.Transmission | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type CarsCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    fuel: number
    horsePower: number
    drive: number
    transmission: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type CarsAvgAggregateInputType = {
    id?: true
    year?: true
    horsePower?: true
  }

  export type CarsSumAggregateInputType = {
    id?: true
    year?: true
    horsePower?: true
  }

  export type CarsMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    fuel?: true
    horsePower?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type CarsMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    fuel?: true
    horsePower?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type CarsCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    fuel?: true
    horsePower?: true
    drive?: true
    transmission?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type CarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to aggregate.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarsWhereUniqueInput
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
    _count?: true | CarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarsMaxAggregateInputType
  }

  export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
        [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCars[P]>
      : GetScalarType<T[P], AggregateCars[P]>
  }




  export type CarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarsWhereInput
    orderBy?: CarsOrderByWithAggregationInput | CarsOrderByWithAggregationInput[]
    by: CarsScalarFieldEnum[] | CarsScalarFieldEnum
    having?: CarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarsCountAggregateInputType | true
    _avg?: CarsAvgAggregateInputType
    _sum?: CarsSumAggregateInputType
    _min?: CarsMinAggregateInputType
    _max?: CarsMaxAggregateInputType
  }

  export type CarsGroupByOutputType = {
    id: number
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: CarsCountAggregateOutputType | null
    _avg: CarsAvgAggregateOutputType | null
    _sum: CarsSumAggregateOutputType | null
    _min: CarsMinAggregateOutputType | null
    _max: CarsMaxAggregateOutputType | null
  }

  type GetCarsGroupByPayload<T extends CarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarsGroupByOutputType[P]>
            : GetScalarType<T[P], CarsGroupByOutputType[P]>
        }
      >
    >


  export type CarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel?: boolean
    horsePower?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    carSales?: boolean | Cars$carSalesArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel?: boolean
    horsePower?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel?: boolean
    horsePower?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }, ExtArgs["result"]["cars"]>

  export type CarsSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    fuel?: boolean
    horsePower?: boolean
    drive?: boolean
    transmission?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type CarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "fuel" | "horsePower" | "drive" | "transmission" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["cars"]>
  export type CarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carSales?: boolean | Cars$carSalesArgs<ExtArgs>
    _count?: boolean | CarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cars"
    objects: {
      carSales: Prisma.$SaleCarsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      make: string
      model: string
      year: number
      fuel: $Enums.Fuel
      horsePower: number
      drive: $Enums.Drive
      transmission: $Enums.Transmission
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["cars"]>
    composites: {}
  }

  type CarsGetPayload<S extends boolean | null | undefined | CarsDefaultArgs> = $Result.GetResult<Prisma.$CarsPayload, S>

  type CarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarsCountAggregateInputType | true
    }

  export interface CarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cars'], meta: { name: 'Cars' } }
    /**
     * Find zero or one Cars that matches the filter.
     * @param {CarsFindUniqueArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarsFindUniqueArgs>(args: SelectSubset<T, CarsFindUniqueArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarsFindUniqueOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarsFindUniqueOrThrowArgs>(args: SelectSubset<T, CarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarsFindFirstArgs>(args?: SelectSubset<T, CarsFindFirstArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindFirstOrThrowArgs} args - Arguments to find a Cars
     * @example
     * // Get one Cars
     * const cars = await prisma.cars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarsFindFirstOrThrowArgs>(args?: SelectSubset<T, CarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.cars.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.cars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carsWithIdOnly = await prisma.cars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarsFindManyArgs>(args?: SelectSubset<T, CarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cars.
     * @param {CarsCreateArgs} args - Arguments to create a Cars.
     * @example
     * // Create one Cars
     * const Cars = await prisma.cars.create({
     *   data: {
     *     // ... data to create a Cars
     *   }
     * })
     * 
     */
    create<T extends CarsCreateArgs>(args: SelectSubset<T, CarsCreateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarsCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarsCreateManyArgs>(args?: SelectSubset<T, CarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarsCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const cars = await prisma.cars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarsCreateManyAndReturnArgs>(args?: SelectSubset<T, CarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cars.
     * @param {CarsDeleteArgs} args - Arguments to delete one Cars.
     * @example
     * // Delete one Cars
     * const Cars = await prisma.cars.delete({
     *   where: {
     *     // ... filter to delete one Cars
     *   }
     * })
     * 
     */
    delete<T extends CarsDeleteArgs>(args: SelectSubset<T, CarsDeleteArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cars.
     * @param {CarsUpdateArgs} args - Arguments to update one Cars.
     * @example
     * // Update one Cars
     * const cars = await prisma.cars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarsUpdateArgs>(args: SelectSubset<T, CarsUpdateArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarsDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.cars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarsDeleteManyArgs>(args?: SelectSubset<T, CarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarsUpdateManyArgs>(args: SelectSubset<T, CarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarsUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const cars = await prisma.cars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carsWithIdOnly = await prisma.cars.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarsUpdateManyAndReturnArgs>(args: SelectSubset<T, CarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cars.
     * @param {CarsUpsertArgs} args - Arguments to update or create a Cars.
     * @example
     * // Update or create a Cars
     * const cars = await prisma.cars.upsert({
     *   create: {
     *     // ... data to create a Cars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cars we want to update
     *   }
     * })
     */
    upsert<T extends CarsUpsertArgs>(args: SelectSubset<T, CarsUpsertArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.cars.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarsCountArgs>(
      args?: Subset<T, CarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarsAggregateArgs>(args: Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>

    /**
     * Group by Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarsGroupByArgs} args - Group by arguments.
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
      T extends CarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarsGroupByArgs['orderBy'] }
        : { orderBy?: CarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cars model
   */
  readonly fields: CarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carSales<T extends Cars$carSalesArgs<ExtArgs> = {}>(args?: Subset<T, Cars$carSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cars model
   */ 
  interface CarsFieldRefs {
    readonly id: FieldRef<"Cars", 'Int'>
    readonly make: FieldRef<"Cars", 'String'>
    readonly model: FieldRef<"Cars", 'String'>
    readonly year: FieldRef<"Cars", 'Int'>
    readonly fuel: FieldRef<"Cars", 'Fuel'>
    readonly horsePower: FieldRef<"Cars", 'Int'>
    readonly drive: FieldRef<"Cars", 'Drive'>
    readonly transmission: FieldRef<"Cars", 'Transmission'>
    readonly dateTimeCreated: FieldRef<"Cars", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Cars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cars findUnique
   */
  export type CarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findUniqueOrThrow
   */
  export type CarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars findFirst
   */
  export type CarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
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
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findFirstOrThrow
   */
  export type CarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarsWhereUniqueInput
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
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars findMany
   */
  export type CarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarsOrderByWithRelationInput | CarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarsWhereUniqueInput
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
    distinct?: CarsScalarFieldEnum | CarsScalarFieldEnum[]
  }

  /**
   * Cars create
   */
  export type CarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cars.
     */
    data: XOR<CarsCreateInput, CarsUncheckedCreateInput>
  }

  /**
   * Cars createMany
   */
  export type CarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars createManyAndReturn
   */
  export type CarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarsCreateManyInput | CarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cars update
   */
  export type CarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cars.
     */
    data: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
    /**
     * Choose, which Cars to update.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars updateMany
   */
  export type CarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars updateManyAndReturn
   */
  export type CarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarsUpdateManyMutationInput, CarsUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Cars upsert
   */
  export type CarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cars to update in case it exists.
     */
    where: CarsWhereUniqueInput
    /**
     * In case the Cars found by the `where` argument doesn't exist, create a new Cars with this data.
     */
    create: XOR<CarsCreateInput, CarsUncheckedCreateInput>
    /**
     * In case the Cars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarsUpdateInput, CarsUncheckedUpdateInput>
  }

  /**
   * Cars delete
   */
  export type CarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
    /**
     * Filter which Cars to delete.
     */
    where: CarsWhereUniqueInput
  }

  /**
   * Cars deleteMany
   */
  export type CarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarsWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Cars.carSales
   */
  export type Cars$carSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    where?: SaleCarsWhereInput
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    cursor?: SaleCarsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * Cars without action
   */
  export type CarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cars
     */
    select?: CarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cars
     */
    omit?: CarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarsInclude<ExtArgs> | null
  }


  /**
   * Model SaleCars
   */

  export type AggregateSaleCars = {
    _count: SaleCarsCountAggregateOutputType | null
    _avg: SaleCarsAvgAggregateOutputType | null
    _sum: SaleCarsSumAggregateOutputType | null
    _min: SaleCarsMinAggregateOutputType | null
    _max: SaleCarsMaxAggregateOutputType | null
  }

  export type SaleCarsAvgAggregateOutputType = {
    id: number | null
    carId: number | null
    mileage: number | null
    price: number | null
  }

  export type SaleCarsSumAggregateOutputType = {
    id: number | null
    carId: number | null
    mileage: number | null
    price: number | null
  }

  export type SaleCarsMinAggregateOutputType = {
    id: number | null
    vin: string | null
    sellerCognitoId: string | null
    carId: number | null
    mileage: number | null
    price: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type SaleCarsMaxAggregateOutputType = {
    id: number | null
    vin: string | null
    sellerCognitoId: string | null
    carId: number | null
    mileage: number | null
    price: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type SaleCarsCountAggregateOutputType = {
    id: number
    vin: number
    sellerCognitoId: number
    carId: number
    mileage: number
    price: number
    photoUrls: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type SaleCarsAvgAggregateInputType = {
    id?: true
    carId?: true
    mileage?: true
    price?: true
  }

  export type SaleCarsSumAggregateInputType = {
    id?: true
    carId?: true
    mileage?: true
    price?: true
  }

  export type SaleCarsMinAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type SaleCarsMaxAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type SaleCarsCountAggregateInputType = {
    id?: true
    vin?: true
    sellerCognitoId?: true
    carId?: true
    mileage?: true
    price?: true
    photoUrls?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type SaleCarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleCars to aggregate.
     */
    where?: SaleCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleCars to fetch.
     */
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleCars
    **/
    _count?: true | SaleCarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleCarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleCarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleCarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleCarsMaxAggregateInputType
  }

  export type GetSaleCarsAggregateType<T extends SaleCarsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleCars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleCars[P]>
      : GetScalarType<T[P], AggregateSaleCars[P]>
  }




  export type SaleCarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleCarsWhereInput
    orderBy?: SaleCarsOrderByWithAggregationInput | SaleCarsOrderByWithAggregationInput[]
    by: SaleCarsScalarFieldEnum[] | SaleCarsScalarFieldEnum
    having?: SaleCarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCarsCountAggregateInputType | true
    _avg?: SaleCarsAvgAggregateInputType
    _sum?: SaleCarsSumAggregateInputType
    _min?: SaleCarsMinAggregateInputType
    _max?: SaleCarsMaxAggregateInputType
  }

  export type SaleCarsGroupByOutputType = {
    id: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls: string[]
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: SaleCarsCountAggregateOutputType | null
    _avg: SaleCarsAvgAggregateOutputType | null
    _sum: SaleCarsSumAggregateOutputType | null
    _min: SaleCarsMinAggregateOutputType | null
    _max: SaleCarsMaxAggregateOutputType | null
  }

  type GetSaleCarsGroupByPayload<T extends SaleCarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleCarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleCarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleCarsGroupByOutputType[P]>
            : GetScalarType<T[P], SaleCarsGroupByOutputType[P]>
        }
      >
    >


  export type SaleCarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | SaleCars$orderArgs<ExtArgs>
    favouritedBy?: boolean | SaleCars$favouritedByArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
    _count?: boolean | SaleCarsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleCars"]>

  export type SaleCarsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleCars"]>

  export type SaleCarsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleCars"]>

  export type SaleCarsSelectScalar = {
    id?: boolean
    vin?: boolean
    sellerCognitoId?: boolean
    carId?: boolean
    mileage?: boolean
    price?: boolean
    photoUrls?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type SaleCarsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vin" | "sellerCognitoId" | "carId" | "mileage" | "price" | "photoUrls" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["saleCars"]>
  export type SaleCarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SaleCars$orderArgs<ExtArgs>
    favouritedBy?: boolean | SaleCars$favouritedByArgs<ExtArgs>
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
    _count?: boolean | SaleCarsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleCarsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }
  export type SaleCarsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UsersDefaultArgs<ExtArgs>
    car?: boolean | CarsDefaultArgs<ExtArgs>
  }

  export type $SaleCarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleCars"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs> | null
      favouritedBy: Prisma.$UsersPayload<ExtArgs>[]
      seller: Prisma.$UsersPayload<ExtArgs>
      car: Prisma.$CarsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vin: string
      sellerCognitoId: string
      carId: number
      mileage: number
      price: number
      photoUrls: string[]
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["saleCars"]>
    composites: {}
  }

  type SaleCarsGetPayload<S extends boolean | null | undefined | SaleCarsDefaultArgs> = $Result.GetResult<Prisma.$SaleCarsPayload, S>

  type SaleCarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleCarsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCarsCountAggregateInputType | true
    }

  export interface SaleCarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleCars'], meta: { name: 'SaleCars' } }
    /**
     * Find zero or one SaleCars that matches the filter.
     * @param {SaleCarsFindUniqueArgs} args - Arguments to find a SaleCars
     * @example
     * // Get one SaleCars
     * const saleCars = await prisma.saleCars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleCarsFindUniqueArgs>(args: SelectSubset<T, SaleCarsFindUniqueArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleCars that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleCarsFindUniqueOrThrowArgs} args - Arguments to find a SaleCars
     * @example
     * // Get one SaleCars
     * const saleCars = await prisma.saleCars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleCarsFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleCarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsFindFirstArgs} args - Arguments to find a SaleCars
     * @example
     * // Get one SaleCars
     * const saleCars = await prisma.saleCars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleCarsFindFirstArgs>(args?: SelectSubset<T, SaleCarsFindFirstArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleCars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsFindFirstOrThrowArgs} args - Arguments to find a SaleCars
     * @example
     * // Get one SaleCars
     * const saleCars = await prisma.saleCars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleCarsFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleCarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleCars
     * const saleCars = await prisma.saleCars.findMany()
     * 
     * // Get first 10 SaleCars
     * const saleCars = await prisma.saleCars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleCarsWithIdOnly = await prisma.saleCars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleCarsFindManyArgs>(args?: SelectSubset<T, SaleCarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleCars.
     * @param {SaleCarsCreateArgs} args - Arguments to create a SaleCars.
     * @example
     * // Create one SaleCars
     * const SaleCars = await prisma.saleCars.create({
     *   data: {
     *     // ... data to create a SaleCars
     *   }
     * })
     * 
     */
    create<T extends SaleCarsCreateArgs>(args: SelectSubset<T, SaleCarsCreateArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleCars.
     * @param {SaleCarsCreateManyArgs} args - Arguments to create many SaleCars.
     * @example
     * // Create many SaleCars
     * const saleCars = await prisma.saleCars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCarsCreateManyArgs>(args?: SelectSubset<T, SaleCarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleCars and returns the data saved in the database.
     * @param {SaleCarsCreateManyAndReturnArgs} args - Arguments to create many SaleCars.
     * @example
     * // Create many SaleCars
     * const saleCars = await prisma.saleCars.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleCars and only return the `id`
     * const saleCarsWithIdOnly = await prisma.saleCars.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCarsCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCarsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleCars.
     * @param {SaleCarsDeleteArgs} args - Arguments to delete one SaleCars.
     * @example
     * // Delete one SaleCars
     * const SaleCars = await prisma.saleCars.delete({
     *   where: {
     *     // ... filter to delete one SaleCars
     *   }
     * })
     * 
     */
    delete<T extends SaleCarsDeleteArgs>(args: SelectSubset<T, SaleCarsDeleteArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleCars.
     * @param {SaleCarsUpdateArgs} args - Arguments to update one SaleCars.
     * @example
     * // Update one SaleCars
     * const saleCars = await prisma.saleCars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleCarsUpdateArgs>(args: SelectSubset<T, SaleCarsUpdateArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleCars.
     * @param {SaleCarsDeleteManyArgs} args - Arguments to filter SaleCars to delete.
     * @example
     * // Delete a few SaleCars
     * const { count } = await prisma.saleCars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleCarsDeleteManyArgs>(args?: SelectSubset<T, SaleCarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleCars
     * const saleCars = await prisma.saleCars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleCarsUpdateManyArgs>(args: SelectSubset<T, SaleCarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleCars and returns the data updated in the database.
     * @param {SaleCarsUpdateManyAndReturnArgs} args - Arguments to update many SaleCars.
     * @example
     * // Update many SaleCars
     * const saleCars = await prisma.saleCars.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleCars and only return the `id`
     * const saleCarsWithIdOnly = await prisma.saleCars.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaleCarsUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleCarsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleCars.
     * @param {SaleCarsUpsertArgs} args - Arguments to update or create a SaleCars.
     * @example
     * // Update or create a SaleCars
     * const saleCars = await prisma.saleCars.upsert({
     *   create: {
     *     // ... data to create a SaleCars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleCars we want to update
     *   }
     * })
     */
    upsert<T extends SaleCarsUpsertArgs>(args: SelectSubset<T, SaleCarsUpsertArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsCountArgs} args - Arguments to filter SaleCars to count.
     * @example
     * // Count the number of SaleCars
     * const count = await prisma.saleCars.count({
     *   where: {
     *     // ... the filter for the SaleCars we want to count
     *   }
     * })
    **/
    count<T extends SaleCarsCountArgs>(
      args?: Subset<T, SaleCarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleCarsAggregateArgs>(args: Subset<T, SaleCarsAggregateArgs>): Prisma.PrismaPromise<GetSaleCarsAggregateType<T>>

    /**
     * Group by SaleCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCarsGroupByArgs} args - Group by arguments.
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
      T extends SaleCarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleCarsGroupByArgs['orderBy'] }
        : { orderBy?: SaleCarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleCarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleCars model
   */
  readonly fields: SaleCarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleCars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleCarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends SaleCars$orderArgs<ExtArgs> = {}>(args?: Subset<T, SaleCars$orderArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favouritedBy<T extends SaleCars$favouritedByArgs<ExtArgs> = {}>(args?: Subset<T, SaleCars$favouritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seller<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarsDefaultArgs<ExtArgs>>): Prisma__CarsClient<$Result.GetResult<Prisma.$CarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SaleCars model
   */ 
  interface SaleCarsFieldRefs {
    readonly id: FieldRef<"SaleCars", 'Int'>
    readonly vin: FieldRef<"SaleCars", 'String'>
    readonly sellerCognitoId: FieldRef<"SaleCars", 'String'>
    readonly carId: FieldRef<"SaleCars", 'Int'>
    readonly mileage: FieldRef<"SaleCars", 'Int'>
    readonly price: FieldRef<"SaleCars", 'Float'>
    readonly photoUrls: FieldRef<"SaleCars", 'String[]'>
    readonly dateTimeCreated: FieldRef<"SaleCars", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"SaleCars", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SaleCars findUnique
   */
  export type SaleCarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter, which SaleCars to fetch.
     */
    where: SaleCarsWhereUniqueInput
  }

  /**
   * SaleCars findUniqueOrThrow
   */
  export type SaleCarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter, which SaleCars to fetch.
     */
    where: SaleCarsWhereUniqueInput
  }

  /**
   * SaleCars findFirst
   */
  export type SaleCarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter, which SaleCars to fetch.
     */
    where?: SaleCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleCars to fetch.
     */
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleCars.
     */
    cursor?: SaleCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleCars.
     */
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * SaleCars findFirstOrThrow
   */
  export type SaleCarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter, which SaleCars to fetch.
     */
    where?: SaleCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleCars to fetch.
     */
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleCars.
     */
    cursor?: SaleCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleCars.
     */
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * SaleCars findMany
   */
  export type SaleCarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter, which SaleCars to fetch.
     */
    where?: SaleCarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleCars to fetch.
     */
    orderBy?: SaleCarsOrderByWithRelationInput | SaleCarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleCars.
     */
    cursor?: SaleCarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleCars.
     */
    skip?: number
    distinct?: SaleCarsScalarFieldEnum | SaleCarsScalarFieldEnum[]
  }

  /**
   * SaleCars create
   */
  export type SaleCarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleCars.
     */
    data: XOR<SaleCarsCreateInput, SaleCarsUncheckedCreateInput>
  }

  /**
   * SaleCars createMany
   */
  export type SaleCarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleCars.
     */
    data: SaleCarsCreateManyInput | SaleCarsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleCars createManyAndReturn
   */
  export type SaleCarsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * The data used to create many SaleCars.
     */
    data: SaleCarsCreateManyInput | SaleCarsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleCars update
   */
  export type SaleCarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleCars.
     */
    data: XOR<SaleCarsUpdateInput, SaleCarsUncheckedUpdateInput>
    /**
     * Choose, which SaleCars to update.
     */
    where: SaleCarsWhereUniqueInput
  }

  /**
   * SaleCars updateMany
   */
  export type SaleCarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleCars.
     */
    data: XOR<SaleCarsUpdateManyMutationInput, SaleCarsUncheckedUpdateManyInput>
    /**
     * Filter which SaleCars to update
     */
    where?: SaleCarsWhereInput
    /**
     * Limit how many SaleCars to update.
     */
    limit?: number
  }

  /**
   * SaleCars updateManyAndReturn
   */
  export type SaleCarsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * The data used to update SaleCars.
     */
    data: XOR<SaleCarsUpdateManyMutationInput, SaleCarsUncheckedUpdateManyInput>
    /**
     * Filter which SaleCars to update
     */
    where?: SaleCarsWhereInput
    /**
     * Limit how many SaleCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleCars upsert
   */
  export type SaleCarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleCars to update in case it exists.
     */
    where: SaleCarsWhereUniqueInput
    /**
     * In case the SaleCars found by the `where` argument doesn't exist, create a new SaleCars with this data.
     */
    create: XOR<SaleCarsCreateInput, SaleCarsUncheckedCreateInput>
    /**
     * In case the SaleCars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleCarsUpdateInput, SaleCarsUncheckedUpdateInput>
  }

  /**
   * SaleCars delete
   */
  export type SaleCarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
    /**
     * Filter which SaleCars to delete.
     */
    where: SaleCarsWhereUniqueInput
  }

  /**
   * SaleCars deleteMany
   */
  export type SaleCarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleCars to delete
     */
    where?: SaleCarsWhereInput
    /**
     * Limit how many SaleCars to delete.
     */
    limit?: number
  }

  /**
   * SaleCars.order
   */
  export type SaleCars$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }

  /**
   * SaleCars.favouritedBy
   */
  export type SaleCars$favouritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * SaleCars without action
   */
  export type SaleCarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCars
     */
    select?: SaleCarsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleCars
     */
    omit?: SaleCarsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleCarsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    saleCarId: number | null
    totalAmount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    saleCarId: number | null
    totalAmount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    saleCarId: number | null
    buyerCognitoId: string | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    saleCarId: number | null
    buyerCognitoId: string | null
    totalAmount: number | null
    status: $Enums.OrderStatus | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    saleCarId: number
    buyerCognitoId: number
    totalAmount: number
    status: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    saleCarId?: true
    totalAmount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    saleCarId?: true
    totalAmount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    saleCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    saleCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    saleCarId?: true
    buyerCognitoId?: true
    totalAmount?: true
    status?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
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
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    saleCarId: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    saleCarId?: boolean
    buyerCognitoId?: boolean
    totalAmount?: boolean
    status?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleCarId" | "buyerCognitoId" | "totalAmount" | "status" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
    payment?: boolean | Orders$paymentArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleCar?: boolean | SaleCarsDefaultArgs<ExtArgs>
    buyer?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      saleCar: Prisma.$SaleCarsPayload<ExtArgs>
      buyer: Prisma.$UsersPayload<ExtArgs>
      payment: Prisma.$PaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saleCarId: number
      buyerCognitoId: string
      totalAmount: number
      status: $Enums.OrderStatus
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleCar<T extends SaleCarsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleCarsDefaultArgs<ExtArgs>>): Prisma__SaleCarsClient<$Result.GetResult<Prisma.$SaleCarsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Orders$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly saleCarId: FieldRef<"Orders", 'Int'>
    readonly buyerCognitoId: FieldRef<"Orders", 'String'>
    readonly totalAmount: FieldRef<"Orders", 'Float'>
    readonly status: FieldRef<"Orders", 'OrderStatus'>
    readonly dateTimeCreated: FieldRef<"Orders", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.payment
   */
  export type Orders$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    amount: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentStatus: $Enums.PaymentStatus | null
    amount: number | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    orderId: number
    paymentMethod: number
    paymentStatus: number
    amount: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    orderId?: true
    paymentMethod?: true
    paymentStatus?: true
    amount?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
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
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    id?: boolean
    orderId?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    amount?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paymentMethod" | "paymentStatus" | "amount" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      paymentMethod: $Enums.PaymentMethod
      paymentStatus: $Enums.PaymentStatus
      amount: number
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */ 
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'Int'>
    readonly orderId: FieldRef<"Payments", 'Int'>
    readonly paymentMethod: FieldRef<"Payments", 'PaymentMethod'>
    readonly paymentStatus: FieldRef<"Payments", 'PaymentStatus'>
    readonly amount: FieldRef<"Payments", 'Float'>
    readonly dateTimeCreated: FieldRef<"Payments", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    reviewerCognitoId: string | null
    rating: number | null
    comment: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    userCognitoId: string | null
    reviewerCognitoId: string | null
    rating: number | null
    comment: string | null
    dateTimeCreated: Date | null
    dateTimeUpdated: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    userCognitoId: number
    reviewerCognitoId: number
    rating: number
    comment: number
    dateTimeCreated: number
    dateTimeUpdated: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    userCognitoId?: true
    reviewerCognitoId?: true
    rating?: true
    comment?: true
    dateTimeCreated?: true
    dateTimeUpdated?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
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
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    userCognitoId: string
    reviewerCognitoId: string
    rating: number
    comment: string
    dateTimeCreated: Date
    dateTimeUpdated: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    userCognitoId?: boolean
    reviewerCognitoId?: boolean
    rating?: boolean
    comment?: boolean
    dateTimeCreated?: boolean
    dateTimeUpdated?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCognitoId" | "reviewerCognitoId" | "rating" | "comment" | "dateTimeCreated" | "dateTimeUpdated", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    reviewer?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      reviewer: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCognitoId: string
      reviewerCognitoId: string
      rating: number
      comment: string
      dateTimeCreated: Date
      dateTimeUpdated: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly userCognitoId: FieldRef<"Reviews", 'String'>
    readonly reviewerCognitoId: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly dateTimeCreated: FieldRef<"Reviews", 'DateTime'>
    readonly dateTimeUpdated: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
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
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
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
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
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
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    locationId: 'locationId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const CarsScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    fuel: 'fuel',
    horsePower: 'horsePower',
    drive: 'drive',
    transmission: 'transmission',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum]


  export const SaleCarsScalarFieldEnum: {
    id: 'id',
    vin: 'vin',
    sellerCognitoId: 'sellerCognitoId',
    carId: 'carId',
    mileage: 'mileage',
    price: 'price',
    photoUrls: 'photoUrls',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type SaleCarsScalarFieldEnum = (typeof SaleCarsScalarFieldEnum)[keyof typeof SaleCarsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    saleCarId: 'saleCarId',
    buyerCognitoId: 'buyerCognitoId',
    totalAmount: 'totalAmount',
    status: 'status',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    amount: 'amount',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    userCognitoId: 'userCognitoId',
    reviewerCognitoId: 'reviewerCognitoId',
    rating: 'rating',
    comment: 'comment',
    dateTimeCreated: 'dateTimeCreated',
    dateTimeUpdated: 'dateTimeUpdated'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    cognitoId?: StringFilter<"Users"> | string
    locationId?: IntFilter<"Users"> | number
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    dateTimeCreated?: DateTimeFilter<"Users"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Users"> | Date | string
    favourites?: SaleCarsListRelationFilter
    carSales?: SaleCarsListRelationFilter
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
    reviewer?: ReviewsListRelationFilter
    address?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    favourites?: SaleCarsOrderByRelationAggregateInput
    carSales?: SaleCarsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    reviewer?: ReviewsOrderByRelationAggregateInput
    address?: LocationOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    locationId?: IntFilter<"Users"> | number
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    dateTimeCreated?: DateTimeFilter<"Users"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Users"> | Date | string
    favourites?: SaleCarsListRelationFilter
    carSales?: SaleCarsListRelationFilter
    orders?: OrdersListRelationFilter
    reviews?: ReviewsListRelationFilter
    reviewer?: ReviewsListRelationFilter
    address?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id" | "cognitoId">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    cognitoId?: StringWithAggregatesFilter<"Users"> | string
    locationId?: IntWithAggregatesFilter<"Users"> | number
    firstName?: StringWithAggregatesFilter<"Users"> | string
    lastName?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Users"> | Date | string
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
    Users?: UsersListRelationFilter
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
    Users?: UsersOrderByRelationAggregateInput
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
    Users?: UsersListRelationFilter
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

  export type CarsWhereInput = {
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    id?: IntFilter<"Cars"> | number
    make?: StringFilter<"Cars"> | string
    model?: StringFilter<"Cars"> | string
    year?: IntFilter<"Cars"> | number
    fuel?: EnumFuelFilter<"Cars"> | $Enums.Fuel
    horsePower?: IntFilter<"Cars"> | number
    drive?: EnumDriveFilter<"Cars"> | $Enums.Drive
    transmission?: EnumTransmissionFilter<"Cars"> | $Enums.Transmission
    dateTimeCreated?: DateTimeFilter<"Cars"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Cars"> | Date | string
    carSales?: SaleCarsListRelationFilter
  }

  export type CarsOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel?: SortOrder
    horsePower?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    carSales?: SaleCarsOrderByRelationAggregateInput
  }

  export type CarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarsWhereInput | CarsWhereInput[]
    OR?: CarsWhereInput[]
    NOT?: CarsWhereInput | CarsWhereInput[]
    make?: StringFilter<"Cars"> | string
    model?: StringFilter<"Cars"> | string
    year?: IntFilter<"Cars"> | number
    fuel?: EnumFuelFilter<"Cars"> | $Enums.Fuel
    horsePower?: IntFilter<"Cars"> | number
    drive?: EnumDriveFilter<"Cars"> | $Enums.Drive
    transmission?: EnumTransmissionFilter<"Cars"> | $Enums.Transmission
    dateTimeCreated?: DateTimeFilter<"Cars"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Cars"> | Date | string
    carSales?: SaleCarsListRelationFilter
  }, "id">

  export type CarsOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel?: SortOrder
    horsePower?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: CarsCountOrderByAggregateInput
    _avg?: CarsAvgOrderByAggregateInput
    _max?: CarsMaxOrderByAggregateInput
    _min?: CarsMinOrderByAggregateInput
    _sum?: CarsSumOrderByAggregateInput
  }

  export type CarsScalarWhereWithAggregatesInput = {
    AND?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    OR?: CarsScalarWhereWithAggregatesInput[]
    NOT?: CarsScalarWhereWithAggregatesInput | CarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cars"> | number
    make?: StringWithAggregatesFilter<"Cars"> | string
    model?: StringWithAggregatesFilter<"Cars"> | string
    year?: IntWithAggregatesFilter<"Cars"> | number
    fuel?: EnumFuelWithAggregatesFilter<"Cars"> | $Enums.Fuel
    horsePower?: IntWithAggregatesFilter<"Cars"> | number
    drive?: EnumDriveWithAggregatesFilter<"Cars"> | $Enums.Drive
    transmission?: EnumTransmissionWithAggregatesFilter<"Cars"> | $Enums.Transmission
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Cars"> | Date | string
  }

  export type SaleCarsWhereInput = {
    AND?: SaleCarsWhereInput | SaleCarsWhereInput[]
    OR?: SaleCarsWhereInput[]
    NOT?: SaleCarsWhereInput | SaleCarsWhereInput[]
    id?: IntFilter<"SaleCars"> | number
    vin?: StringFilter<"SaleCars"> | string
    sellerCognitoId?: StringFilter<"SaleCars"> | string
    carId?: IntFilter<"SaleCars"> | number
    mileage?: IntFilter<"SaleCars"> | number
    price?: FloatFilter<"SaleCars"> | number
    photoUrls?: StringNullableListFilter<"SaleCars">
    dateTimeCreated?: DateTimeFilter<"SaleCars"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SaleCars"> | Date | string
    order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    favouritedBy?: UsersListRelationFilter
    seller?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }

  export type SaleCarsOrderByWithRelationInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    order?: OrdersOrderByWithRelationInput
    favouritedBy?: UsersOrderByRelationAggregateInput
    seller?: UsersOrderByWithRelationInput
    car?: CarsOrderByWithRelationInput
  }

  export type SaleCarsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vin?: string
    AND?: SaleCarsWhereInput | SaleCarsWhereInput[]
    OR?: SaleCarsWhereInput[]
    NOT?: SaleCarsWhereInput | SaleCarsWhereInput[]
    sellerCognitoId?: StringFilter<"SaleCars"> | string
    carId?: IntFilter<"SaleCars"> | number
    mileage?: IntFilter<"SaleCars"> | number
    price?: FloatFilter<"SaleCars"> | number
    photoUrls?: StringNullableListFilter<"SaleCars">
    dateTimeCreated?: DateTimeFilter<"SaleCars"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SaleCars"> | Date | string
    order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    favouritedBy?: UsersListRelationFilter
    seller?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    car?: XOR<CarsScalarRelationFilter, CarsWhereInput>
  }, "id" | "vin">

  export type SaleCarsOrderByWithAggregationInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: SaleCarsCountOrderByAggregateInput
    _avg?: SaleCarsAvgOrderByAggregateInput
    _max?: SaleCarsMaxOrderByAggregateInput
    _min?: SaleCarsMinOrderByAggregateInput
    _sum?: SaleCarsSumOrderByAggregateInput
  }

  export type SaleCarsScalarWhereWithAggregatesInput = {
    AND?: SaleCarsScalarWhereWithAggregatesInput | SaleCarsScalarWhereWithAggregatesInput[]
    OR?: SaleCarsScalarWhereWithAggregatesInput[]
    NOT?: SaleCarsScalarWhereWithAggregatesInput | SaleCarsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaleCars"> | number
    vin?: StringWithAggregatesFilter<"SaleCars"> | string
    sellerCognitoId?: StringWithAggregatesFilter<"SaleCars"> | string
    carId?: IntWithAggregatesFilter<"SaleCars"> | number
    mileage?: IntWithAggregatesFilter<"SaleCars"> | number
    price?: FloatWithAggregatesFilter<"SaleCars"> | number
    photoUrls?: StringNullableListFilter<"SaleCars">
    dateTimeCreated?: DateTimeWithAggregatesFilter<"SaleCars"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"SaleCars"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    saleCarId?: IntFilter<"Orders"> | number
    buyerCognitoId?: StringFilter<"Orders"> | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Orders"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Orders"> | Date | string
    saleCar?: XOR<SaleCarsScalarRelationFilter, SaleCarsWhereInput>
    buyer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    saleCar?: SaleCarsOrderByWithRelationInput
    buyer?: UsersOrderByWithRelationInput
    payment?: PaymentsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    saleCarId?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    buyerCognitoId?: StringFilter<"Orders"> | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Orders"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Orders"> | Date | string
    saleCar?: XOR<SaleCarsScalarRelationFilter, SaleCarsWhereInput>
    buyer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
  }, "id" | "saleCarId">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    saleCarId?: IntWithAggregatesFilter<"Orders"> | number
    buyerCognitoId?: StringWithAggregatesFilter<"Orders"> | string
    totalAmount?: FloatWithAggregatesFilter<"Orders"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: IntFilter<"Payments"> | number
    orderId?: IntFilter<"Payments"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payments"> | number
    dateTimeCreated?: DateTimeFilter<"Payments"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    paymentMethod?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    amount?: FloatFilter<"Payments"> | number
    dateTimeCreated?: DateTimeFilter<"Payments"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id" | "orderId">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payments"> | number
    orderId?: IntWithAggregatesFilter<"Payments"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payments"> | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    amount?: FloatWithAggregatesFilter<"Payments"> | number
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userCognitoId?: StringFilter<"Reviews"> | string
    reviewerCognitoId?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    dateTimeCreated?: DateTimeFilter<"Reviews"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    reviewer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    user?: UsersOrderByWithRelationInput
    reviewer?: UsersOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    userCognitoId?: StringFilter<"Reviews"> | string
    reviewerCognitoId?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    dateTimeCreated?: DateTimeFilter<"Reviews"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    reviewer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    userCognitoId?: StringWithAggregatesFilter<"Reviews"> | string
    reviewerCognitoId?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringWithAggregatesFilter<"Reviews"> | string
    dateTimeCreated?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    dateTimeUpdated?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type UsersCreateInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
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
    Users?: UsersUpdateManyWithoutAddressNestedInput
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
    Users?: UsersUncheckedUpdateManyWithoutAddressNestedInput
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

  export type CarsCreateInput = {
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SaleCarsCreateNestedManyWithoutCarInput
  }

  export type CarsUncheckedCreateInput = {
    id?: number
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarsUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SaleCarsUpdateManyWithoutCarNestedInput
  }

  export type CarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SaleCarsUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarsCreateManyInput = {
    id?: number
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarsUpdateManyMutationInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCarsCreateInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersCreateNestedManyWithoutFavouritesInput
    seller: UsersCreateNestedOneWithoutCarSalesInput
    car: CarsCreateNestedOneWithoutCarSalesInput
  }

  export type SaleCarsUncheckedCreateInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersUncheckedCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SaleCarsUpdateInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUpdateManyWithoutFavouritesNestedInput
    seller?: UsersUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarsUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SaleCarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUncheckedUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SaleCarsCreateManyInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SaleCarsUpdateManyMutationInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    saleCar: SaleCarsCreateNestedOneWithoutOrderInput
    buyer: UsersCreateNestedOneWithoutOrdersInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    saleCarId: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    saleCar?: SaleCarsUpdateOneRequiredWithoutOrderNestedInput
    buyer?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    saleCarId: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentsUpdateInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: number
    orderId: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
    reviewer: UsersCreateNestedOneWithoutReviewerInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    userCognitoId: string
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UsersUpdateOneRequiredWithoutReviewerNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    id?: number
    userCognitoId: string
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
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

  export type SaleCarsListRelationFilter = {
    every?: SaleCarsWhereInput
    some?: SaleCarsWhereInput
    none?: SaleCarsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type SaleCarsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    locationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
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

  export type CarsCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel?: SortOrder
    horsePower?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarsAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    horsePower?: SortOrder
  }

  export type CarsMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel?: SortOrder
    horsePower?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarsMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    fuel?: SortOrder
    horsePower?: SortOrder
    drive?: SortOrder
    transmission?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type CarsSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    horsePower?: SortOrder
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

  export type OrdersNullableScalarRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CarsScalarRelationFilter = {
    is?: CarsWhereInput
    isNot?: CarsWhereInput
  }

  export type SaleCarsCountOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    photoUrls?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SaleCarsAvgOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
  }

  export type SaleCarsMaxOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SaleCarsMinOrderByAggregateInput = {
    id?: SortOrder
    vin?: SortOrder
    sellerCognitoId?: SortOrder
    carId?: SortOrder
    mileage?: SortOrder
    price?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type SaleCarsSumOrderByAggregateInput = {
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

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type SaleCarsScalarRelationFilter = {
    is?: SaleCarsWhereInput
    isNot?: SaleCarsWhereInput
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    saleCarId?: SortOrder
    buyerCognitoId?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    saleCarId?: SortOrder
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

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    amount?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
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

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    userCognitoId?: SortOrder
    reviewerCognitoId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    dateTimeCreated?: SortOrder
    dateTimeUpdated?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type SaleCarsCreateNestedManyWithoutFavouritedByInput = {
    create?: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput> | SaleCarsCreateWithoutFavouritedByInput[] | SaleCarsUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutFavouritedByInput | SaleCarsCreateOrConnectWithoutFavouritedByInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
  }

  export type SaleCarsCreateNestedManyWithoutSellerInput = {
    create?: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput> | SaleCarsCreateWithoutSellerInput[] | SaleCarsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutSellerInput | SaleCarsCreateOrConnectWithoutSellerInput[]
    createMany?: SaleCarsCreateManySellerInputEnvelope
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput> | ReviewsCreateWithoutReviewerInput[] | ReviewsUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewerInput | ReviewsCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutUsersInput = {
    connect?: LocationWhereUniqueInput
  }

  export type SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput = {
    create?: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput> | SaleCarsCreateWithoutFavouritedByInput[] | SaleCarsUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutFavouritedByInput | SaleCarsCreateOrConnectWithoutFavouritedByInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
  }

  export type SaleCarsUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput> | SaleCarsCreateWithoutSellerInput[] | SaleCarsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutSellerInput | SaleCarsCreateOrConnectWithoutSellerInput[]
    createMany?: SaleCarsCreateManySellerInputEnvelope
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput> | ReviewsCreateWithoutReviewerInput[] | ReviewsUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewerInput | ReviewsCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SaleCarsUpdateManyWithoutFavouritedByNestedInput = {
    create?: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput> | SaleCarsCreateWithoutFavouritedByInput[] | SaleCarsUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutFavouritedByInput | SaleCarsCreateOrConnectWithoutFavouritedByInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutFavouritedByInput | SaleCarsUpsertWithWhereUniqueWithoutFavouritedByInput[]
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutFavouritedByInput | SaleCarsUpdateWithWhereUniqueWithoutFavouritedByInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutFavouritedByInput | SaleCarsUpdateManyWithWhereWithoutFavouritedByInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type SaleCarsUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput> | SaleCarsCreateWithoutSellerInput[] | SaleCarsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutSellerInput | SaleCarsCreateOrConnectWithoutSellerInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutSellerInput | SaleCarsUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SaleCarsCreateManySellerInputEnvelope
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutSellerInput | SaleCarsUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutSellerInput | SaleCarsUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBuyerInput | OrdersUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBuyerInput | OrdersUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBuyerInput | OrdersUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput> | ReviewsCreateWithoutReviewerInput[] | ReviewsUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewerInput | ReviewsCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutReviewerInput | ReviewsUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutReviewerInput | ReviewsUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutReviewerInput | ReviewsUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type LocationUpdateOneRequiredWithoutUsersNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUsersInput, LocationUpdateWithoutUsersInput>, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput = {
    create?: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput> | SaleCarsCreateWithoutFavouritedByInput[] | SaleCarsUncheckedCreateWithoutFavouritedByInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutFavouritedByInput | SaleCarsCreateOrConnectWithoutFavouritedByInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutFavouritedByInput | SaleCarsUpsertWithWhereUniqueWithoutFavouritedByInput[]
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutFavouritedByInput | SaleCarsUpdateWithWhereUniqueWithoutFavouritedByInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutFavouritedByInput | SaleCarsUpdateManyWithWhereWithoutFavouritedByInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type SaleCarsUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput> | SaleCarsCreateWithoutSellerInput[] | SaleCarsUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutSellerInput | SaleCarsCreateOrConnectWithoutSellerInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutSellerInput | SaleCarsUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SaleCarsCreateManySellerInputEnvelope
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutSellerInput | SaleCarsUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutSellerInput | SaleCarsUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBuyerInput | OrdersUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBuyerInput | OrdersUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBuyerInput | OrdersUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput> | ReviewsCreateWithoutReviewerInput[] | ReviewsUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewerInput | ReviewsCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutReviewerInput | ReviewsUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewsCreateManyReviewerInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutReviewerInput | ReviewsUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutReviewerInput | ReviewsUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput> | UsersCreateWithoutAddressInput[] | UsersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput | UsersCreateOrConnectWithoutAddressInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAddressInput | UsersUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UsersCreateManyAddressInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAddressInput | UsersUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAddressInput | UsersUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput> | UsersCreateWithoutAddressInput[] | UsersUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput | UsersCreateOrConnectWithoutAddressInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutAddressInput | UsersUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UsersCreateManyAddressInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutAddressInput | UsersUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutAddressInput | UsersUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type SaleCarsCreateNestedManyWithoutCarInput = {
    create?: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput> | SaleCarsCreateWithoutCarInput[] | SaleCarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutCarInput | SaleCarsCreateOrConnectWithoutCarInput[]
    createMany?: SaleCarsCreateManyCarInputEnvelope
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
  }

  export type SaleCarsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput> | SaleCarsCreateWithoutCarInput[] | SaleCarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutCarInput | SaleCarsCreateOrConnectWithoutCarInput[]
    createMany?: SaleCarsCreateManyCarInputEnvelope
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
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

  export type SaleCarsUpdateManyWithoutCarNestedInput = {
    create?: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput> | SaleCarsCreateWithoutCarInput[] | SaleCarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutCarInput | SaleCarsCreateOrConnectWithoutCarInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutCarInput | SaleCarsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: SaleCarsCreateManyCarInputEnvelope
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutCarInput | SaleCarsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutCarInput | SaleCarsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type SaleCarsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput> | SaleCarsCreateWithoutCarInput[] | SaleCarsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: SaleCarsCreateOrConnectWithoutCarInput | SaleCarsCreateOrConnectWithoutCarInput[]
    upsert?: SaleCarsUpsertWithWhereUniqueWithoutCarInput | SaleCarsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: SaleCarsCreateManyCarInputEnvelope
    set?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    disconnect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    delete?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    connect?: SaleCarsWhereUniqueInput | SaleCarsWhereUniqueInput[]
    update?: SaleCarsUpdateWithWhereUniqueWithoutCarInput | SaleCarsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: SaleCarsUpdateManyWithWhereWithoutCarInput | SaleCarsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
  }

  export type SaleCarsCreatephotoUrlsInput = {
    set: string[]
  }

  export type OrdersCreateNestedOneWithoutSaleCarInput = {
    create?: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutSaleCarInput
    connect?: OrdersWhereUniqueInput
  }

  export type UsersCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput> | UsersCreateWithoutFavouritesInput[] | UsersUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFavouritesInput | UsersCreateOrConnectWithoutFavouritesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutCarSalesInput = {
    create?: XOR<UsersCreateWithoutCarSalesInput, UsersUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarSalesInput
    connect?: UsersWhereUniqueInput
  }

  export type CarsCreateNestedOneWithoutCarSalesInput = {
    create?: XOR<CarsCreateWithoutCarSalesInput, CarsUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutCarSalesInput
    connect?: CarsWhereUniqueInput
  }

  export type OrdersUncheckedCreateNestedOneWithoutSaleCarInput = {
    create?: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutSaleCarInput
    connect?: OrdersWhereUniqueInput
  }

  export type UsersUncheckedCreateNestedManyWithoutFavouritesInput = {
    create?: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput> | UsersCreateWithoutFavouritesInput[] | UsersUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFavouritesInput | UsersCreateOrConnectWithoutFavouritesInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleCarsUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrdersUpdateOneWithoutSaleCarNestedInput = {
    create?: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutSaleCarInput
    upsert?: OrdersUpsertWithoutSaleCarInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutSaleCarInput, OrdersUpdateWithoutSaleCarInput>, OrdersUncheckedUpdateWithoutSaleCarInput>
  }

  export type UsersUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput> | UsersCreateWithoutFavouritesInput[] | UsersUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFavouritesInput | UsersCreateOrConnectWithoutFavouritesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFavouritesInput | UsersUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFavouritesInput | UsersUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFavouritesInput | UsersUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutCarSalesNestedInput = {
    create?: XOR<UsersCreateWithoutCarSalesInput, UsersUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCarSalesInput
    upsert?: UsersUpsertWithoutCarSalesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCarSalesInput, UsersUpdateWithoutCarSalesInput>, UsersUncheckedUpdateWithoutCarSalesInput>
  }

  export type CarsUpdateOneRequiredWithoutCarSalesNestedInput = {
    create?: XOR<CarsCreateWithoutCarSalesInput, CarsUncheckedCreateWithoutCarSalesInput>
    connectOrCreate?: CarsCreateOrConnectWithoutCarSalesInput
    upsert?: CarsUpsertWithoutCarSalesInput
    connect?: CarsWhereUniqueInput
    update?: XOR<XOR<CarsUpdateToOneWithWhereWithoutCarSalesInput, CarsUpdateWithoutCarSalesInput>, CarsUncheckedUpdateWithoutCarSalesInput>
  }

  export type OrdersUncheckedUpdateOneWithoutSaleCarNestedInput = {
    create?: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutSaleCarInput
    upsert?: OrdersUpsertWithoutSaleCarInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutSaleCarInput, OrdersUpdateWithoutSaleCarInput>, OrdersUncheckedUpdateWithoutSaleCarInput>
  }

  export type UsersUncheckedUpdateManyWithoutFavouritesNestedInput = {
    create?: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput> | UsersCreateWithoutFavouritesInput[] | UsersUncheckedCreateWithoutFavouritesInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFavouritesInput | UsersCreateOrConnectWithoutFavouritesInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFavouritesInput | UsersUpsertWithWhereUniqueWithoutFavouritesInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFavouritesInput | UsersUpdateWithWhereUniqueWithoutFavouritesInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFavouritesInput | UsersUpdateManyWithWhereWithoutFavouritesInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type SaleCarsCreateNestedOneWithoutOrderInput = {
    create?: XOR<SaleCarsCreateWithoutOrderInput, SaleCarsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SaleCarsCreateOrConnectWithoutOrderInput
    connect?: SaleCarsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type PaymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type PaymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type SaleCarsUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<SaleCarsCreateWithoutOrderInput, SaleCarsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SaleCarsCreateOrConnectWithoutOrderInput
    upsert?: SaleCarsUpsertWithoutOrderInput
    connect?: SaleCarsWhereUniqueInput
    update?: XOR<XOR<SaleCarsUpdateToOneWithWhereWithoutOrderInput, SaleCarsUpdateWithoutOrderInput>, SaleCarsUncheckedUpdateWithoutOrderInput>
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReviewerInput = {
    create?: XOR<UsersCreateWithoutReviewerInput, UsersUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewerInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateOneRequiredWithoutReviewerNestedInput = {
    create?: XOR<UsersCreateWithoutReviewerInput, UsersUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewerInput
    upsert?: UsersUpsertWithoutReviewerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewerInput, UsersUpdateWithoutReviewerInput>, UsersUncheckedUpdateWithoutReviewerInput>
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

  export type SaleCarsCreateWithoutFavouritedByInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersCreateNestedOneWithoutSaleCarInput
    seller: UsersCreateNestedOneWithoutCarSalesInput
    car: CarsCreateNestedOneWithoutCarSalesInput
  }

  export type SaleCarsUncheckedCreateWithoutFavouritedByInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersUncheckedCreateNestedOneWithoutSaleCarInput
  }

  export type SaleCarsCreateOrConnectWithoutFavouritedByInput = {
    where: SaleCarsWhereUniqueInput
    create: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput>
  }

  export type SaleCarsCreateWithoutSellerInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersCreateNestedManyWithoutFavouritesInput
    car: CarsCreateNestedOneWithoutCarSalesInput
  }

  export type SaleCarsUncheckedCreateWithoutSellerInput = {
    id?: number
    vin: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersUncheckedCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SaleCarsCreateOrConnectWithoutSellerInput = {
    where: SaleCarsWhereUniqueInput
    create: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput>
  }

  export type SaleCarsCreateManySellerInputEnvelope = {
    data: SaleCarsCreateManySellerInput | SaleCarsCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutBuyerInput = {
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    saleCar: SaleCarsCreateNestedOneWithoutOrderInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutBuyerInput = {
    id?: number
    saleCarId: number
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersCreateManyBuyerInputEnvelope = {
    data: OrdersCreateManyBuyerInput | OrdersCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    reviewer: UsersCreateNestedOneWithoutReviewerInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutReviewerInput = {
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    user: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutReviewerInput = {
    id?: number
    userCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewsCreateManyReviewerInputEnvelope = {
    data: ReviewsCreateManyReviewerInput | ReviewsCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type SaleCarsUpsertWithWhereUniqueWithoutFavouritedByInput = {
    where: SaleCarsWhereUniqueInput
    update: XOR<SaleCarsUpdateWithoutFavouritedByInput, SaleCarsUncheckedUpdateWithoutFavouritedByInput>
    create: XOR<SaleCarsCreateWithoutFavouritedByInput, SaleCarsUncheckedCreateWithoutFavouritedByInput>
  }

  export type SaleCarsUpdateWithWhereUniqueWithoutFavouritedByInput = {
    where: SaleCarsWhereUniqueInput
    data: XOR<SaleCarsUpdateWithoutFavouritedByInput, SaleCarsUncheckedUpdateWithoutFavouritedByInput>
  }

  export type SaleCarsUpdateManyWithWhereWithoutFavouritedByInput = {
    where: SaleCarsScalarWhereInput
    data: XOR<SaleCarsUpdateManyMutationInput, SaleCarsUncheckedUpdateManyWithoutFavouritedByInput>
  }

  export type SaleCarsScalarWhereInput = {
    AND?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
    OR?: SaleCarsScalarWhereInput[]
    NOT?: SaleCarsScalarWhereInput | SaleCarsScalarWhereInput[]
    id?: IntFilter<"SaleCars"> | number
    vin?: StringFilter<"SaleCars"> | string
    sellerCognitoId?: StringFilter<"SaleCars"> | string
    carId?: IntFilter<"SaleCars"> | number
    mileage?: IntFilter<"SaleCars"> | number
    price?: FloatFilter<"SaleCars"> | number
    photoUrls?: StringNullableListFilter<"SaleCars">
    dateTimeCreated?: DateTimeFilter<"SaleCars"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"SaleCars"> | Date | string
  }

  export type SaleCarsUpsertWithWhereUniqueWithoutSellerInput = {
    where: SaleCarsWhereUniqueInput
    update: XOR<SaleCarsUpdateWithoutSellerInput, SaleCarsUncheckedUpdateWithoutSellerInput>
    create: XOR<SaleCarsCreateWithoutSellerInput, SaleCarsUncheckedCreateWithoutSellerInput>
  }

  export type SaleCarsUpdateWithWhereUniqueWithoutSellerInput = {
    where: SaleCarsWhereUniqueInput
    data: XOR<SaleCarsUpdateWithoutSellerInput, SaleCarsUncheckedUpdateWithoutSellerInput>
  }

  export type SaleCarsUpdateManyWithWhereWithoutSellerInput = {
    where: SaleCarsScalarWhereInput
    data: XOR<SaleCarsUpdateManyMutationInput, SaleCarsUncheckedUpdateManyWithoutSellerInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBuyerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    saleCarId?: IntFilter<"Orders"> | number
    buyerCognitoId?: StringFilter<"Orders"> | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFilter<"Orders"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Orders"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    userCognitoId?: StringFilter<"Reviews"> | string
    reviewerCognitoId?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    comment?: StringFilter<"Reviews"> | string
    dateTimeCreated?: DateTimeFilter<"Reviews"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutReviewerInput, ReviewsUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewsCreateWithoutReviewerInput, ReviewsUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutReviewerInput, ReviewsUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutReviewerInput>
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

  export type UsersCreateWithoutAddressInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
  }

  export type UsersUncheckedCreateWithoutAddressInput = {
    id?: number
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersCreateOrConnectWithoutAddressInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersUpsertWithWhereUniqueWithoutAddressInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersCreateManyAddressInputEnvelope = {
    data: UsersCreateManyAddressInput | UsersCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpdateWithWhereUniqueWithoutAddressInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type UsersUpdateManyWithWhereWithoutAddressInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutAddressInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    cognitoId?: StringFilter<"Users"> | string
    locationId?: IntFilter<"Users"> | number
    firstName?: StringFilter<"Users"> | string
    lastName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    dateTimeCreated?: DateTimeFilter<"Users"> | Date | string
    dateTimeUpdated?: DateTimeFilter<"Users"> | Date | string
  }

  export type SaleCarsCreateWithoutCarInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersCreateNestedManyWithoutFavouritesInput
    seller: UsersCreateNestedOneWithoutCarSalesInput
  }

  export type SaleCarsUncheckedCreateWithoutCarInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    order?: OrdersUncheckedCreateNestedOneWithoutSaleCarInput
    favouritedBy?: UsersUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SaleCarsCreateOrConnectWithoutCarInput = {
    where: SaleCarsWhereUniqueInput
    create: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput>
  }

  export type SaleCarsCreateManyCarInputEnvelope = {
    data: SaleCarsCreateManyCarInput | SaleCarsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type SaleCarsUpsertWithWhereUniqueWithoutCarInput = {
    where: SaleCarsWhereUniqueInput
    update: XOR<SaleCarsUpdateWithoutCarInput, SaleCarsUncheckedUpdateWithoutCarInput>
    create: XOR<SaleCarsCreateWithoutCarInput, SaleCarsUncheckedCreateWithoutCarInput>
  }

  export type SaleCarsUpdateWithWhereUniqueWithoutCarInput = {
    where: SaleCarsWhereUniqueInput
    data: XOR<SaleCarsUpdateWithoutCarInput, SaleCarsUncheckedUpdateWithoutCarInput>
  }

  export type SaleCarsUpdateManyWithWhereWithoutCarInput = {
    where: SaleCarsScalarWhereInput
    data: XOR<SaleCarsUpdateManyMutationInput, SaleCarsUncheckedUpdateManyWithoutCarInput>
  }

  export type OrdersCreateWithoutSaleCarInput = {
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    buyer: UsersCreateNestedOneWithoutOrdersInput
    payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutSaleCarInput = {
    id?: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutSaleCarInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
  }

  export type UsersCreateWithoutFavouritesInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutFavouritesInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersCreateOrConnectWithoutFavouritesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput>
  }

  export type UsersCreateWithoutCarSalesInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCarSalesInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersCreateOrConnectWithoutCarSalesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCarSalesInput, UsersUncheckedCreateWithoutCarSalesInput>
  }

  export type CarsCreateWithoutCarSalesInput = {
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarsUncheckedCreateWithoutCarSalesInput = {
    id?: number
    make: string
    model: string
    year: number
    fuel: $Enums.Fuel
    horsePower: number
    drive: $Enums.Drive
    transmission: $Enums.Transmission
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type CarsCreateOrConnectWithoutCarSalesInput = {
    where: CarsWhereUniqueInput
    create: XOR<CarsCreateWithoutCarSalesInput, CarsUncheckedCreateWithoutCarSalesInput>
  }

  export type OrdersUpsertWithoutSaleCarInput = {
    update: XOR<OrdersUpdateWithoutSaleCarInput, OrdersUncheckedUpdateWithoutSaleCarInput>
    create: XOR<OrdersCreateWithoutSaleCarInput, OrdersUncheckedCreateWithoutSaleCarInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutSaleCarInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutSaleCarInput, OrdersUncheckedUpdateWithoutSaleCarInput>
  }

  export type OrdersUpdateWithoutSaleCarInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutSaleCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type UsersUpsertWithWhereUniqueWithoutFavouritesInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutFavouritesInput, UsersUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UsersCreateWithoutFavouritesInput, UsersUncheckedCreateWithoutFavouritesInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutFavouritesInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutFavouritesInput, UsersUncheckedUpdateWithoutFavouritesInput>
  }

  export type UsersUpdateManyWithWhereWithoutFavouritesInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutFavouritesInput>
  }

  export type UsersUpsertWithoutCarSalesInput = {
    update: XOR<UsersUpdateWithoutCarSalesInput, UsersUncheckedUpdateWithoutCarSalesInput>
    create: XOR<UsersCreateWithoutCarSalesInput, UsersUncheckedCreateWithoutCarSalesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCarSalesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCarSalesInput, UsersUncheckedUpdateWithoutCarSalesInput>
  }

  export type UsersUpdateWithoutCarSalesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCarSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type CarsUpsertWithoutCarSalesInput = {
    update: XOR<CarsUpdateWithoutCarSalesInput, CarsUncheckedUpdateWithoutCarSalesInput>
    create: XOR<CarsCreateWithoutCarSalesInput, CarsUncheckedCreateWithoutCarSalesInput>
    where?: CarsWhereInput
  }

  export type CarsUpdateToOneWithWhereWithoutCarSalesInput = {
    where?: CarsWhereInput
    data: XOR<CarsUpdateWithoutCarSalesInput, CarsUncheckedUpdateWithoutCarSalesInput>
  }

  export type CarsUpdateWithoutCarSalesInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarsUncheckedUpdateWithoutCarSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    fuel?: EnumFuelFieldUpdateOperationsInput | $Enums.Fuel
    horsePower?: IntFieldUpdateOperationsInput | number
    drive?: EnumDriveFieldUpdateOperationsInput | $Enums.Drive
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCarsCreateWithoutOrderInput = {
    vin: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favouritedBy?: UsersCreateNestedManyWithoutFavouritesInput
    seller: UsersCreateNestedOneWithoutCarSalesInput
    car: CarsCreateNestedOneWithoutCarSalesInput
  }

  export type SaleCarsUncheckedCreateWithoutOrderInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favouritedBy?: UsersUncheckedCreateNestedManyWithoutFavouritesInput
  }

  export type SaleCarsCreateOrConnectWithoutOrderInput = {
    where: SaleCarsWhereUniqueInput
    create: XOR<SaleCarsCreateWithoutOrderInput, SaleCarsUncheckedCreateWithoutOrderInput>
  }

  export type UsersCreateWithoutOrdersInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentsCreateWithoutOrderInput = {
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: number
    paymentMethod: $Enums.PaymentMethod
    paymentStatus: $Enums.PaymentStatus
    amount: number
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type SaleCarsUpsertWithoutOrderInput = {
    update: XOR<SaleCarsUpdateWithoutOrderInput, SaleCarsUncheckedUpdateWithoutOrderInput>
    create: XOR<SaleCarsCreateWithoutOrderInput, SaleCarsUncheckedCreateWithoutOrderInput>
    where?: SaleCarsWhereInput
  }

  export type SaleCarsUpdateToOneWithWhereWithoutOrderInput = {
    where?: SaleCarsWhereInput
    data: XOR<SaleCarsUpdateWithoutOrderInput, SaleCarsUncheckedUpdateWithoutOrderInput>
  }

  export type SaleCarsUpdateWithoutOrderInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favouritedBy?: UsersUpdateManyWithoutFavouritesNestedInput
    seller?: UsersUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarsUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SaleCarsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favouritedBy?: UsersUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type PaymentsUpsertWithoutOrderInput = {
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateWithoutOrderInput = {
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amount?: FloatFieldUpdateOperationsInput | number
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutPaymentInput = {
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    saleCar: SaleCarsCreateNestedOneWithoutOrderInput
    buyer: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    id?: number
    saleCarId: number
    buyerCognitoId: string
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    saleCar?: SaleCarsUpdateOneRequiredWithoutOrderNestedInput
    buyer?: UsersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleCarId?: IntFieldUpdateOperationsInput | number
    buyerCognitoId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutReviewsInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviewer?: ReviewsCreateNestedManyWithoutReviewerInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviewer?: ReviewsUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type UsersCreateWithoutReviewerInput = {
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsCreateNestedManyWithoutSellerInput
    orders?: OrdersCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    address: LocationCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutReviewerInput = {
    id?: number
    cognitoId: string
    locationId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
    favourites?: SaleCarsUncheckedCreateNestedManyWithoutFavouritedByInput
    carSales?: SaleCarsUncheckedCreateNestedManyWithoutSellerInput
    orders?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReviewerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewerInput, UsersUncheckedCreateWithoutReviewerInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UsersUpsertWithoutReviewerInput = {
    update: XOR<UsersUpdateWithoutReviewerInput, UsersUncheckedUpdateWithoutReviewerInput>
    create: XOR<UsersCreateWithoutReviewerInput, UsersUncheckedCreateWithoutReviewerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewerInput, UsersUncheckedUpdateWithoutReviewerInput>
  }

  export type UsersUpdateWithoutReviewerInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SaleCarsCreateManySellerInput = {
    id?: number
    vin: string
    carId: number
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type OrdersCreateManyBuyerInput = {
    id?: number
    saleCarId: number
    totalAmount: number
    status: $Enums.OrderStatus
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    reviewerCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type ReviewsCreateManyReviewerInput = {
    id?: number
    userCognitoId: string
    rating?: number
    comment: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SaleCarsUpdateWithoutFavouritedByInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutSaleCarNestedInput
    seller?: UsersUpdateOneRequiredWithoutCarSalesNestedInput
    car?: CarsUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SaleCarsUncheckedUpdateWithoutFavouritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUncheckedUpdateOneWithoutSaleCarNestedInput
  }

  export type SaleCarsUncheckedUpdateManyWithoutFavouritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCarsUpdateWithoutSellerInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUpdateManyWithoutFavouritesNestedInput
    car?: CarsUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SaleCarsUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUncheckedUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SaleCarsUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    carId?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutBuyerInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    saleCar?: SaleCarsUpdateOneRequiredWithoutOrderNestedInput
    payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleCarId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleCarId?: IntFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UsersUpdateOneRequiredWithoutReviewerNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCognitoId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutAddressInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
  }

  export type UsersUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    favourites?: SaleCarsUncheckedUpdateManyWithoutFavouritedByNestedInput
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UsersCreateManyAddressInput = {
    id?: number
    cognitoId: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type UsersUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCarsCreateManyCarInput = {
    id?: number
    vin: string
    sellerCognitoId: string
    mileage: number
    price: number
    photoUrls?: SaleCarsCreatephotoUrlsInput | string[]
    dateTimeCreated?: Date | string
    dateTimeUpdated?: Date | string
  }

  export type SaleCarsUpdateWithoutCarInput = {
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUpdateManyWithoutFavouritesNestedInput
    seller?: UsersUpdateOneRequiredWithoutCarSalesNestedInput
  }

  export type SaleCarsUncheckedUpdateWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUncheckedUpdateOneWithoutSaleCarNestedInput
    favouritedBy?: UsersUncheckedUpdateManyWithoutFavouritesNestedInput
  }

  export type SaleCarsUncheckedUpdateManyWithoutCarInput = {
    id?: IntFieldUpdateOperationsInput | number
    vin?: StringFieldUpdateOperationsInput | string
    sellerCognitoId?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    photoUrls?: SaleCarsUpdatephotoUrlsInput | string[]
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpdateWithoutFavouritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SaleCarsUpdateManyWithoutSellerNestedInput
    orders?: OrdersUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUpdateManyWithoutReviewerNestedInput
    address?: LocationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateTimeCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTimeUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    carSales?: SaleCarsUncheckedUpdateManyWithoutSellerNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    reviewer?: ReviewsUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
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