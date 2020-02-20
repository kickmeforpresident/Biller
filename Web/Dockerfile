FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base

RUN apt-get update -qq && \
    apt-get install -qq -y wget && \
    apt-get install -qq -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -qq -y build-essential nodejs && \
    apt-get install -qq -y nginx

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build

RUN apt-get update -qq && \
    apt-get install -qq -y wget && \
    apt-get install -qq -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -qq -y build-essential nodejs && \
    apt-get install -qq -y nginx

WORKDIR /src

COPY Web/Web.csproj Web/
COPY Models/Models.csproj Models/
COPY Core/Core.csproj Core/
COPY Infrastructure/Infrastructure.csproj Infrastructure/

RUN dotnet restore Web/Web.csproj

COPY ["Web/ClientApp/package.json", "src/Web/ClientApp/"]

RUN cd src/Web/ClientApp \
&& npm i --silent

COPY . .
WORKDIR /src/Web
RUN dotnet build Web.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Web.csproj -c Release -o /app

FROM base AS final
ARG ASPNETCORE_CONNECTION
ENV ASPNETCORE_CONNECTION=$ASPNETCORE_CONNECTION
WORKDIR /app
COPY --from=publish /app .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Web.dll