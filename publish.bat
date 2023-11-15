@echo off

rd /s /q public\\publish
rd /s /q public\\publish-zip
mkdir public\\publish-zip

cd cmonitor.web
call npm install
call npm run build 
cd ../ 
		

dotnet publish ./cmonitor -c release -f net7.0 -o ./public/publish/win-x64  -r win-x64 -p:PublishTrimmed=true  -p:TrimMode=partial  --self-contained true -p:TieredPGO=true  -p:DebugType=none -p:DebugSymbols=false -p:PublishSingleFile=true -p:EnableCompressionInSingleFile=true -p:DebuggerSupport=false -p:EnableUnsafeBinaryFormatterSerialization=false -p:EnableUnsafeUTF7Encoding=false -p:HttpActivityPropagationSupport=false -p:InvariantGlobalization=true  -p:MetadataUpdaterSupport=false  -p:UseSystemResourceKeys=true

dotnet publish ./cmonitor -c releaselinux -f net7.0 -o ./public/publish/linux-x64  -r linux-x64 -p:PublishTrimmed=true  --self-contained true -p:TieredPGO=true  -p:DebugType=none -p:DebugSymbols=false -p:PublishSingleFile=true  -p:EnableCompressionInSingleFile=true -p:DebuggerSupport=false -p:EnableUnsafeBinaryFormatterSerialization=false -p:EnableUnsafeUTF7Encoding=false -p:HttpActivityPropagationSupport=false -p:InvariantGlobalization=true  -p:MetadataUpdaterSupport=false  -p:UseSystemResourceKeys=true  -p:TrimMode=partial

dotnet publish ./cmonitor -c release -f net7.0 -r win-x64 -o ./public/publish/win-x64-any/  -p:PublishSingleFile=true --self-contained false
dotnet publish ./cmonitor -c releaselinux -f net7.0 -r linux-x64 -o ./public/publish/linux-x64-any/  -p:PublishSingleFile=true --self-contained false


msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./cmonitor.install.win/cmonitor.install.win.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./cmonitor.sas.service/cmonitor.sas.service.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./cmonitor.win/cmonitor.win.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./llock.win/llock.win.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./message.win/message.win.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./notify.win/notify.win.csproj
msbuild  /t:build /p:Configuration=Release /p:OutDir="../public/extends/" ./wallpaper.win/wallpaper.win.csproj


for %%r in (win-x64,win-x64-any) do (
	echo F|xcopy "public\\extends\\*" "public\\publish\\%%r\\*"  /s /f /h /y
)

for %%r in (linux-x64,linux-x64-any) do (
	echo F|xcopy "public\\extends\\web\\*" "public\\publish\\%%r\\web\\"  /s /f /h /y
	for %%f in (nfapi.dll,nfdriver.sys,ntrights.exe) do (
		del  "public\\publish\\%%r\\%%f"
	)
)


7z a -tzip ./public/publish-zip/win-x64.zip ./public/publish/win-x64/*
7z a -tzip ./public/publish-zip/win-x64-any.zip ./public/publish/win-x64-any/*
7z a -tzip ./public/publish-zip/linux-x64.zip ./public/publish/linux-x64/*
7z a -tzip ./public/publish-zip/linux-x64-any.zip ./public/publish/linux-x64-any/*