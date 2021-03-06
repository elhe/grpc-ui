gen:
	protoc -I test_server/pb --go_out=plugins=grpc:test_server/pb test_server/pb/example.proto
	protoc -I http_server --go_out=http_server http_server/api.proto
gen-fixtures:
	protoc -I reflection/fixtures/simple --go_out=plugins=grpc:reflection/fixtures/simple reflection/fixtures/simple/simple.proto
build:
	cd ui && npm run build
	gostatic2lib -package http_server -path ui/build/ -out http_server/static.go

.PHONY: gen gen-fixtures build