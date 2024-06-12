PGDMP  8    *                |        	   PRO-LANCE    16.3    16.3 c    n           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            o           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            p           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            q           1262    17668 	   PRO-LANCE    DATABASE     �   CREATE DATABASE "PRO-LANCE" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "PRO-LANCE";
                postgres    false            _           1247    17758    enum_Users_role    TYPE     ^   CREATE TYPE public."enum_Users_role" AS ENUM (
    'client',
    'freelancer',
    'admin'
);
 $   DROP TYPE public."enum_Users_role";
       public          postgres    false            �            1259    18251    Comments    TABLE       CREATE TABLE public."Comments" (
    id integer NOT NULL,
    comment text,
    user_id integer NOT NULL,
    project_id integer,
    task_id integer,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Comments";
       public         heap    postgres    false            �            1259    18250    Comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Comments_id_seq";
       public          postgres    false    233            r           0    0    Comments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Comments_id_seq" OWNED BY public."Comments".id;
          public          postgres    false    232            �            1259    18225    Estimate    TABLE     a  CREATE TABLE public."Estimate" (
    id integer NOT NULL,
    title text NOT NULL,
    client_id integer NOT NULL,
    freelancer_id integer,
    project_id integer,
    task_id integer,
    total numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Estimate";
       public         heap    postgres    false            �            1259    18224    Estimate_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Estimate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Estimate_id_seq";
       public          postgres    false    231            s           0    0    Estimate_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Estimate_id_seq" OWNED BY public."Estimate".id;
          public          postgres    false    230            �            1259    18108    Invoices    TABLE     H  CREATE TABLE public."Invoices" (
    id integer NOT NULL,
    client_id integer NOT NULL,
    freelancer_id integer,
    project_id integer,
    task_id integer,
    total numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Invoices";
       public         heap    postgres    false            �            1259    18107    Invoices_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Invoices_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Invoices_id_seq";
       public          postgres    false    225            t           0    0    Invoices_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Invoices_id_seq" OWNED BY public."Invoices".id;
          public          postgres    false    224            �            1259    18211    Profiles    TABLE     �  CREATE TABLE public."Profiles" (
    id integer NOT NULL,
    freelancer_id integer NOT NULL,
    name character varying(255) NOT NULL,
    "Trade_offering" character varying(255) NOT NULL,
    "Skills" character varying(255) NOT NULL,
    "Experience" character varying(255) NOT NULL,
    "Location" character varying(255) NOT NULL,
    "Languages" character varying(255) NOT NULL,
    "Contact" character varying(255) NOT NULL,
    image character varying(255) NOT NULL
);
    DROP TABLE public."Profiles";
       public         heap    postgres    false            �            1259    18210    Profiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Profiles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Profiles_id_seq";
       public          postgres    false    229            u           0    0    Profiles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Profiles_id_seq" OWNED BY public."Profiles".id;
          public          postgres    false    228            �            1259    18035    Projects    TABLE     �  CREATE TABLE public."Projects" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    status_id integer NOT NULL,
    client_id integer NOT NULL,
    freelancer_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Projects";
       public         heap    postgres    false            �            1259    18034    Projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Projects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Projects_id_seq";
       public          postgres    false    221            v           0    0    Projects_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Projects_id_seq" OWNED BY public."Projects".id;
          public          postgres    false    220            �            1259    18200    Roles    TABLE     �   CREATE TABLE public."Roles" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Roles";
       public         heap    postgres    false            �            1259    18199    Roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Roles_id_seq";
       public          postgres    false    227            w           0    0    Roles_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;
          public          postgres    false    226            �            1259    17669    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    18024    Statuses    TABLE     �   CREATE TABLE public."Statuses" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Statuses";
       public         heap    postgres    false            �            1259    18023    Statuses_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Statuses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Statuses_id_seq";
       public          postgres    false    219            x           0    0    Statuses_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Statuses_id_seq" OWNED BY public."Statuses".id;
          public          postgres    false    218            �            1259    18059    Tasks    TABLE     �  CREATE TABLE public."Tasks" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    status_id integer NOT NULL,
    client_id integer NOT NULL,
    freelancer_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Tasks";
       public         heap    postgres    false            �            1259    18058    Tasks_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Tasks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Tasks_id_seq";
       public          postgres    false    223            y           0    0    Tasks_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Tasks_id_seq" OWNED BY public."Tasks".id;
          public          postgres    false    222            �            1259    18013    Users    TABLE     j  CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role public."enum_Users_role" NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false    863            �            1259    18012    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    217            z           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    216            �            1259    18278 	   Worknotes    TABLE     &  CREATE TABLE public."Worknotes" (
    id integer NOT NULL,
    worknote text NOT NULL,
    user_id integer NOT NULL,
    project_id integer,
    task_id integer,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Worknotes";
       public         heap    postgres    false            �            1259    18277    Worknotes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Worknotes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."Worknotes_id_seq";
       public          postgres    false    235            {           0    0    Worknotes_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Worknotes_id_seq" OWNED BY public."Worknotes".id;
          public          postgres    false    234            �           2604    18254    Comments id    DEFAULT     n   ALTER TABLE ONLY public."Comments" ALTER COLUMN id SET DEFAULT nextval('public."Comments_id_seq"'::regclass);
 <   ALTER TABLE public."Comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    18228    Estimate id    DEFAULT     n   ALTER TABLE ONLY public."Estimate" ALTER COLUMN id SET DEFAULT nextval('public."Estimate_id_seq"'::regclass);
 <   ALTER TABLE public."Estimate" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    18111    Invoices id    DEFAULT     n   ALTER TABLE ONLY public."Invoices" ALTER COLUMN id SET DEFAULT nextval('public."Invoices_id_seq"'::regclass);
 <   ALTER TABLE public."Invoices" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    18214    Profiles id    DEFAULT     n   ALTER TABLE ONLY public."Profiles" ALTER COLUMN id SET DEFAULT nextval('public."Profiles_id_seq"'::regclass);
 <   ALTER TABLE public."Profiles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    18038    Projects id    DEFAULT     n   ALTER TABLE ONLY public."Projects" ALTER COLUMN id SET DEFAULT nextval('public."Projects_id_seq"'::regclass);
 <   ALTER TABLE public."Projects" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    18203    Roles id    DEFAULT     h   ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);
 9   ALTER TABLE public."Roles" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    18027    Statuses id    DEFAULT     n   ALTER TABLE ONLY public."Statuses" ALTER COLUMN id SET DEFAULT nextval('public."Statuses_id_seq"'::regclass);
 <   ALTER TABLE public."Statuses" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    18062    Tasks id    DEFAULT     h   ALTER TABLE ONLY public."Tasks" ALTER COLUMN id SET DEFAULT nextval('public."Tasks_id_seq"'::regclass);
 9   ALTER TABLE public."Tasks" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    18016    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    18281    Worknotes id    DEFAULT     p   ALTER TABLE ONLY public."Worknotes" ALTER COLUMN id SET DEFAULT nextval('public."Worknotes_id_seq"'::regclass);
 =   ALTER TABLE public."Worknotes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    235    235            i          0    18251    Comments 
   TABLE DATA           i   COPY public."Comments" (id, comment, user_id, project_id, task_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   b{       g          0    18225    Estimate 
   TABLE DATA              COPY public."Estimate" (id, title, client_id, freelancer_id, project_id, task_id, total, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   {       a          0    18108    Invoices 
   TABLE DATA           x   COPY public."Invoices" (id, client_id, freelancer_id, project_id, task_id, total, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   �{       e          0    18211    Profiles 
   TABLE DATA           �   COPY public."Profiles" (id, freelancer_id, name, "Trade_offering", "Skills", "Experience", "Location", "Languages", "Contact", image) FROM stdin;
    public          postgres    false    229   �{       ]          0    18035    Projects 
   TABLE DATA           �   COPY public."Projects" (id, title, description, "startDate", "endDate", status_id, client_id, freelancer_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �{       c          0    18200    Roles 
   TABLE DATA           E   COPY public."Roles" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   �|       W          0    17669    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    215   �|       [          0    18024    Statuses 
   TABLE DATA           H   COPY public."Statuses" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   1}       _          0    18059    Tasks 
   TABLE DATA           �   COPY public."Tasks" (id, title, description, "startDate", "endDate", status_id, client_id, freelancer_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �}       Y          0    18013    Users 
   TABLE DATA           \   COPY public."Users" (id, name, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �}       k          0    18278 	   Worknotes 
   TABLE DATA           k   COPY public."Worknotes" (id, worknote, user_id, project_id, task_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   �~       |           0    0    Comments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Comments_id_seq"', 1, false);
          public          postgres    false    232            }           0    0    Estimate_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Estimate_id_seq"', 1, false);
          public          postgres    false    230            ~           0    0    Invoices_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Invoices_id_seq"', 1, false);
          public          postgres    false    224                       0    0    Profiles_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Profiles_id_seq"', 1, false);
          public          postgres    false    228            �           0    0    Projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Projects_id_seq"', 6, true);
          public          postgres    false    220            �           0    0    Roles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Roles_id_seq"', 1, false);
          public          postgres    false    226            �           0    0    Statuses_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Statuses_id_seq"', 6, true);
          public          postgres    false    218            �           0    0    Tasks_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Tasks_id_seq"', 1, false);
          public          postgres    false    222            �           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 9, true);
          public          postgres    false    216            �           0    0    Worknotes_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Worknotes_id_seq"', 1, false);
          public          postgres    false    234            �           2606    18260    Comments Comments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_pkey";
       public            postgres    false    233            �           2606    18234    Estimate Estimate_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_pkey";
       public            postgres    false    231            �           2606    18115    Invoices Invoices_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Invoices"
    ADD CONSTRAINT "Invoices_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Invoices" DROP CONSTRAINT "Invoices_pkey";
       public            postgres    false    225            �           2606    18218    Profiles Profiles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Profiles" DROP CONSTRAINT "Profiles_pkey";
       public            postgres    false    229            �           2606    18042    Projects Projects_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Projects" DROP CONSTRAINT "Projects_pkey";
       public            postgres    false    221            �           2606    18209    Roles Roles_name_key 
   CONSTRAINT     S   ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_name_key" UNIQUE (name);
 B   ALTER TABLE ONLY public."Roles" DROP CONSTRAINT "Roles_name_key";
       public            postgres    false    227            �           2606    18207    Roles Roles_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Roles" DROP CONSTRAINT "Roles_pkey";
       public            postgres    false    227            �           2606    17673     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    215            �           2606    18033    Statuses Statuses_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Statuses"
    ADD CONSTRAINT "Statuses_name_key" UNIQUE (name);
 H   ALTER TABLE ONLY public."Statuses" DROP CONSTRAINT "Statuses_name_key";
       public            postgres    false    219            �           2606    18031    Statuses Statuses_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Statuses"
    ADD CONSTRAINT "Statuses_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Statuses" DROP CONSTRAINT "Statuses_pkey";
       public            postgres    false    219            �           2606    18066    Tasks Tasks_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Tasks" DROP CONSTRAINT "Tasks_pkey";
       public            postgres    false    223            �           2606    18022    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    217            �           2606    18266 !   Comments Comments_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_project_id_fkey" FOREIGN KEY (project_id) REFERENCES public."Projects"(id);
 O   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_project_id_fkey";
       public          postgres    false    233    4773    221            �           2606    18271    Comments Comments_task_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_task_id_fkey" FOREIGN KEY (task_id) REFERENCES public."Tasks"(id);
 L   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_task_id_fkey";
       public          postgres    false    4775    233    223            �           2606    18261    Comments Comments_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);
 L   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_user_id_fkey";
       public          postgres    false    217    4767    233            �           2606    18235 $   Estimate Estimate_freelancer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_freelancer_id_fkey" FOREIGN KEY (freelancer_id) REFERENCES public."Users"(id);
 R   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_freelancer_id_fkey";
       public          postgres    false    217    4767    231            �           2606    18240 !   Estimate Estimate_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_project_id_fkey" FOREIGN KEY (project_id) REFERENCES public."Projects"(id);
 O   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_project_id_fkey";
       public          postgres    false    4773    231    221            �           2606    18245    Estimate Estimate_task_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_task_id_fkey" FOREIGN KEY (task_id) REFERENCES public."Tasks"(id);
 L   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_task_id_fkey";
       public          postgres    false    4775    231    223            �           2606    18116     Invoices Invoices_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Invoices"
    ADD CONSTRAINT "Invoices_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Users"(id);
 N   ALTER TABLE ONLY public."Invoices" DROP CONSTRAINT "Invoices_client_id_fkey";
       public          postgres    false    4767    225    217            �           2606    18121 $   Invoices Invoices_freelancer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Invoices"
    ADD CONSTRAINT "Invoices_freelancer_id_fkey" FOREIGN KEY (freelancer_id) REFERENCES public."Users"(id);
 R   ALTER TABLE ONLY public."Invoices" DROP CONSTRAINT "Invoices_freelancer_id_fkey";
       public          postgres    false    4767    225    217            �           2606    18126 !   Invoices Invoices_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Invoices"
    ADD CONSTRAINT "Invoices_project_id_fkey" FOREIGN KEY (project_id) REFERENCES public."Projects"(id);
 O   ALTER TABLE ONLY public."Invoices" DROP CONSTRAINT "Invoices_project_id_fkey";
       public          postgres    false    4773    225    221            �           2606    18131    Invoices Invoices_task_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Invoices"
    ADD CONSTRAINT "Invoices_task_id_fkey" FOREIGN KEY (task_id) REFERENCES public."Tasks"(id);
 L   ALTER TABLE ONLY public."Invoices" DROP CONSTRAINT "Invoices_task_id_fkey";
       public          postgres    false    225    223    4775            �           2606    18219 $   Profiles Profiles_freelancer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_freelancer_id_fkey" FOREIGN KEY (freelancer_id) REFERENCES public."Users"(id);
 R   ALTER TABLE ONLY public."Profiles" DROP CONSTRAINT "Profiles_freelancer_id_fkey";
       public          postgres    false    229    4767    217            �           2606    18048     Projects Projects_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Users"(id);
 N   ALTER TABLE ONLY public."Projects" DROP CONSTRAINT "Projects_client_id_fkey";
       public          postgres    false    221    4767    217            �           2606    18053 $   Projects Projects_freelancer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_freelancer_id_fkey" FOREIGN KEY (freelancer_id) REFERENCES public."Users"(id);
 R   ALTER TABLE ONLY public."Projects" DROP CONSTRAINT "Projects_freelancer_id_fkey";
       public          postgres    false    217    4767    221            �           2606    18043     Projects Projects_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_status_id_fkey" FOREIGN KEY (status_id) REFERENCES public."Statuses"(id);
 N   ALTER TABLE ONLY public."Projects" DROP CONSTRAINT "Projects_status_id_fkey";
       public          postgres    false    4771    219    221            �           2606    18072    Tasks Tasks_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Users"(id);
 H   ALTER TABLE ONLY public."Tasks" DROP CONSTRAINT "Tasks_client_id_fkey";
       public          postgres    false    223    4767    217            �           2606    18077    Tasks Tasks_freelancer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_freelancer_id_fkey" FOREIGN KEY (freelancer_id) REFERENCES public."Users"(id);
 L   ALTER TABLE ONLY public."Tasks" DROP CONSTRAINT "Tasks_freelancer_id_fkey";
       public          postgres    false    223    4767    217            �           2606    18067    Tasks Tasks_status_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Tasks"
    ADD CONSTRAINT "Tasks_status_id_fkey" FOREIGN KEY (status_id) REFERENCES public."Statuses"(id);
 H   ALTER TABLE ONLY public."Tasks" DROP CONSTRAINT "Tasks_status_id_fkey";
       public          postgres    false    223    219    4771            �           2606    18291 #   Worknotes Worknotes_project_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Worknotes"
    ADD CONSTRAINT "Worknotes_project_id_fkey" FOREIGN KEY (project_id) REFERENCES public."Projects"(id);
 Q   ALTER TABLE ONLY public."Worknotes" DROP CONSTRAINT "Worknotes_project_id_fkey";
       public          postgres    false    221    4773    235            �           2606    18296     Worknotes Worknotes_task_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Worknotes"
    ADD CONSTRAINT "Worknotes_task_id_fkey" FOREIGN KEY (task_id) REFERENCES public."Tasks"(id);
 N   ALTER TABLE ONLY public."Worknotes" DROP CONSTRAINT "Worknotes_task_id_fkey";
       public          postgres    false    235    4775    223            �           2606    18286     Worknotes Worknotes_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Worknotes"
    ADD CONSTRAINT "Worknotes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);
 N   ALTER TABLE ONLY public."Worknotes" DROP CONSTRAINT "Worknotes_user_id_fkey";
       public          postgres    false    235    4767    217            i      x������ � �      g      x������ � �      a      x������ � �      e      x������ � �      ]   �   x�3�tJM�/JUp-K-�,���KW�,IUJ�I,�K���1��J2R�R��S��A��:0��q����X*Z�ZZ����@�,�I��f�ؤ�̀�LL��:9� U����ӹ(5��D��� �@q��;ΌR���qqq �W{      c      x������ � �      W   �   x�m��
�0��{�ec�t�x)%B7�H���;��X̩����0A�a�.3&�nd�g	��h*�t����d�1�+�M�8M����[~/�����d<�d���n�cp� S����W��K#��p�Cuj^�      [   j   x���A
� E��)����
v�6bCHf�ޟ:A�Y~��4�G�'�F+��:,h66�ʇo�$r��?g�1���s�B�f�B���q1}%Nb�R��
����/l�R�      _      x������ � �      Y   �   x����
�0E��W���QWv�m馛B	��@+��W����d3\�0�9��TJr{^sշ���uVqS	TY�{��������4�`BC��8HT�ye(1�Y@zN�L+�i��ܝ���@��l��Gv�s�I�h.�*�RR����3aE�#���`�G�V\�O�V$�vzA,�+�E3Oj7�r�j7"�B��~%5      k      x������ � �     