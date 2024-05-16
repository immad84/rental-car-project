export const data = {
	"info": {
		"_postman_id": "95b77472-fcf9-4e02-befc-1042b1119562",
		"name": "car rental app",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "30064728",
		"_collection_link": "https://web.postman.co/workspace/car-rental-app~c50130ff-8279-4985-a0cb-2c4666c2ace1/collection/30064728-95b77472-fcf9-4e02-befc-1042b1119562?action=share&source=collection_link&creator=30064728"
	},
	"item": [
		{
			"name": "userauthentication",
			"item": [
				{
					"name": "Signup",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": " {\r\n     \"username\" : \"faizan\",\r\n     \"email\": \"mfaizannoor11+1@gmail.com\",\r\n     \"mobile\": \"3040584598\",\r\n     \"password\": \"3333333\"\r\n }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/auth/signup",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"auth",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "validateOTP",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\":\"mfaizannoor11@gmail.com\",\r\n    \"enteredOTP\":274412\r\n\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/auth/validateOTP",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"auth",
								"validateOTP"
							]
						}
					},
					"response": []
				},
				{
					"name": "resetPassword",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTFAZ21haWwuY29tIiwiaWQiOiI2NWMzNjE5MzY1OGY0Mjk1ZTgzZjQ4ZjgiLCJpYXQiOjE3MDczMDcxODUsImV4cCI6MTcwNzczOTE4NX0.2ViSgC-SsYUZA6BcL-0wYFZzBrzHimgTzxzBSs4u_pc",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"newPassword\": \"121212\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/auth/resetPassword",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"auth",
								"resetPassword"
							]
						}
					},
					"response": []
				},
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"mfaizannoor11+1@gmail.com\",\r\n    \"password\": \"3333333\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/auth/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"auth",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "getUser",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"id\": \"6581b82281d31e1b4a2b5e9f\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://5452-110-39-24-146.ngrok-free.app/auth/getUser",
							"protocol": "https",
							"host": [
								"5452-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"auth",
								"getUser"
							]
						}
					},
					"response": []
				},
				{
					"name": "forget password",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"mfaizannoor11@gmail.com\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/auth/forgetPassword",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"auth",
								"forgetPassword"
							]
						}
					},
					"response": []
				},
				{
					"name": "getAllUsers",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://5452-110-39-24-146.ngrok-free.app/auth/getAllUsers",
							"protocol": "https",
							"host": [
								"5452-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"auth",
								"getAllUsers"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteUser",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://5452-110-39-24-146.ngrok-free.app/auth/deleteUser/6583eedb133fded8df148242",
							"protocol": "https",
							"host": [
								"5452-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"auth",
								"deleteUser",
								"6583eedb133fded8df148242"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Car",
			"item": [
				{
					"name": "createCar",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11aGFtbWFkZmFpemFubXU3NUBnbWFpbC5jb20iLCJpZCI6IjY1YzM2YTQwMDE5YmI4ZjE0Yzg3Y2NjNyIsImlhdCI6MTcwNzMwNTU1NiwiZXhwIjoxNzA3NzM3NTU2fQ.q6ddoHJm8jO_aWQwxeRP7FZWMudP6Z_4R2l3XLo5jfY",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"categoryId\": \"658a8977194d534806d5cbdc\",\r\n    \"companyName\": \"toyota\",\r\n    \"images\": [\r\n        \"uploads\\\\profileImage\\\\1703755692506.png\",\r\n        \"uploads\\\\profileImage\\\\1703898377875.png\",\r\n        \"uploads\\\\profileImage\\\\1704172144286.png\",\r\n        \"uploads\\\\profileImage\\\\1703692222283.png\",\r\n        \"uploads\\\\profileImage\\\\1703444393972.png\",\r\n        \"uploads\\\\profileImage\\\\1703831035019.png\"\r\n    ],\r\n    \"bannerImage\": \"uploads\\\\profileImage\\\\1703403440174.png\",\r\n    \"carName\": \"Fortuner\",\r\n    \"carType\":\"sports\",\r\n    \"fuelCapacity\": \"90\",\r\n    \"steering\": \"auto\",\r\n    \"capacity\": \"7\",\r\n    \"make\": \"toyota\",\r\n    \"model\": \"2022\",\r\n    \"registrationCity\": \"lahore\",\r\n    \"transmission\": \"abc\",\r\n    \"condition\": \"new\",\r\n    \"fuelType\": \"diasel\",\r\n    \"carDesc\": \"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground\",\r\n    \"price\": 5000\r\n\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/car/createCar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"car",
								"createCar"
							]
						}
					},
					"response": []
				},
				{
					"name": "getOneCar",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://40.117.141.7:5000/car/getOneCar/65c36a89019bb8f14c87ccce",
							"protocol": "http",
							"host": [
								"40",
								"117",
								"141",
								"7"
							],
							"port": "5000",
							"path": [
								"car",
								"getOneCar",
								"65c36a89019bb8f14c87ccce"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all cars",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:5000/car/getAllCars?page=1&limit=5",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"car",
								"getAllCars"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "5"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getCarsByCategory",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/car/getCarsByCategory?categoryId=65856b8eb0ac933349fc65c8&page=1&limit=10",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"getCarsByCategory"
							],
							"query": [
								{
									"key": "categoryId",
									"value": "65856b8eb0ac933349fc65c8"
								},
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "updateCar",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"categoryId\": \"65856b54b0ac933349fc65c3\",\r\n    \"companyName\": \"kia\",\r\n    \"images\": [\r\n        \"uploads\\\\profileImage\\\\1703692222283.png\",\r\n        \"uploads\\\\profileImage\\\\1703444393972.png\",\r\n        \"uploads\\\\profileImage\\\\1703831035019.png\"\r\n    ],\r\n    \"bannerImage\": \"uploads\\\\profileImage\\\\1703444393972.png\",\r\n    // \"carName\": \"sportage\",\r\n    // \"carType\":\"sports\",\r\n    // \"fuelCapacity\": \"90\",\r\n    // \"steering\": \"auto\",\r\n    // \"capacity\": \"5\",\r\n    // \"make\": \"kia\",\r\n    // \"model\": \"2023\",\r\n    // \"registrationCity\": \"lahore\",\r\n    // \"transmission\": \"abc\",\r\n    // \"condition\": \"new\",\r\n    // \"fuelType\": \"petrol\",\r\n    // \"carDesc\": \"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground\",\r\n    \"price\": 500\r\n\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/car/updateCar/658573b9acc1781217d5af5b",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"updateCar",
								"658573b9acc1781217d5af5b"
							],
							"query": [
								{
									"key": "",
									"value": null,
									"disabled": true
								},
								{
									"key": "",
									"value": null,
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteCar",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://f01e-110-39-24-146.ngrok-free.app/car/deleteCar/65844037f38093ef83f44afa",
							"protocol": "https",
							"host": [
								"f01e-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"deleteCar",
								"65844037f38093ef83f44afa"
							]
						}
					},
					"response": []
				},
				{
					"name": "multipleUpload",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "images",
									"type": "file",
									"src": [
										"/C:/Users/hp/Downloads/photo-1494976388531-d1058494cdd8 1.png",
										"/C:/Users/hp/Downloads/View 2.png",
										"/C:/Users/hp/Downloads/View 3.png",
										"/C:/Users/hp/Downloads/View 4.png",
										"/C:/Users/hp/Downloads/View 5.png",
										"/C:/Users/hp/Downloads/View 6.png"
									]
								}
							]
						},
						"url": {
							"raw": "https://4787-110-39-24-146.ngrok-free.app/car/multipleUpload",
							"protocol": "https",
							"host": [
								"4787-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"multipleUpload"
							]
						}
					},
					"response": []
				},
				{
					"name": "singleUpload",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "image",
									"type": "file",
									"src": "/C:/Users/hp/Downloads/toyota.png"
								}
							]
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/car/singleUpload",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"singleUpload"
							]
						}
					},
					"response": []
				},
				{
					"name": "getPopularCars",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://6387-110-39-24-146.ngrok-free.app/car/getPopularCars?page=1&limit=4",
							"protocol": "https",
							"host": [
								"6387-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"car",
								"getPopularCars"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "4"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Category",
			"item": [
				{
					"name": "createCategory",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"categoryImage\": \"uploads\\\\profileImage\\\\1703952715134.png\",\r\n    \"companyName\": \"toyota\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/category/createCategory",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"category",
								"createCategory"
							]
						}
					},
					"response": []
				},
				{
					"name": "getCategory",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://4787-110-39-24-146.ngrok-free.app/category/getCategory",
							"protocol": "https",
							"host": [
								"4787-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"category",
								"getCategory"
							]
						}
					},
					"response": []
				},
				{
					"name": "getOneCategory",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://4787-110-39-24-146.ngrok-free.app/category/getOneCategory/656dc2d346a2ebd1b9e20ec9",
							"protocol": "https",
							"host": [
								"4787-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"category",
								"getOneCategory",
								"656dc2d346a2ebd1b9e20ec9"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateCategory",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"categoryImage\": \"uploads\\\\profileImage\\\\1703952715134.png\",\r\n    \"companyName\": \"toyota\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/category/updateCategory/65856b54b0ac933349fc65c3",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"category",
								"updateCategory",
								"65856b54b0ac933349fc65c3"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteCategory",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/category/deleteCategory/65856b54b0ac933349fc65c3",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"category",
								"deleteCategory",
								"65856b54b0ac933349fc65c3"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Reviews",
			"item": [
				{
					"name": "createReview",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"carId\": \"658573b9acc1781217d5af5b\",\r\n    \"review\": \"very good service by this company and very good car\",\r\n    \"rating\": 0\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/review/createReview",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"review",
								"createReview"
							]
						}
					},
					"response": []
				},
				{
					"name": "getReview",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/review/getReview",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"review",
								"getReview"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteReview",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/review/deleteReview/656d7bd6cd4568c87dc66c13",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"review",
								"deleteReview",
								"656d7bd6cd4568c87dc66c13"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateReview",
					"request": {
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"carId\": \"658573b9acc1781217d5af5b\",\r\n    \"review\": \"very good service by this company and very good car 123\",\r\n    \"rating\": 1\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/review/updateReview/656d7bf2cd4568c87dc66c19",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"review",
								"updateReview",
								"656d7bf2cd4568c87dc66c19"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "profile",
			"item": [
				{
					"name": "createProfile",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"profileImage\":\"uploads\\\\profileImage\\\\1704448142734.jpg\",\r\n    \"fullName\": \"faizan noor\",\r\n    \"email\": \"mfaizannoor11@gmail.com\",\r\n    \"mobile\":\"494940340\",\r\n    \"gender\":\"male\",\r\n    \"postcode\":\"584848\",\r\n    \"city\":\"sjsjsj\",\r\n    \"address\":\"sksksk\",\r\n    \"licenseNo\":\"kssksk-3838238\",\r\n    \"frontImage\":\"uploads\\\\profileImage\\\\1703599593608.jpg\",\r\n    \"backImage\":\"uploads\\\\profileImage\\\\1704117368932.jpg\"\r\n    \r\n\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/profile/createProfile",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"profile",
								"createProfile"
							]
						}
					},
					"response": []
				},
				{
					"name": "getProfile",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/profile/getProfile",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"profile",
								"getProfile"
							]
						}
					},
					"response": []
				},
				{
					"name": "updateProfile",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"profileImage\":\"uploads\\\\profileImage\\\\1703599593608.jpg\",\r\n    \"fullName\": \"M faizan noor\"\r\n    // \"email\": \"mfaizannoor11@gmail.com\",\r\n    // \"mobile\":\"494940340\",\r\n    // \"gender\":\"male\",\r\n    // \"postcode\":\"584848\",\r\n    // \"city\":\"sjsjsj\",\r\n    // \"address\":\"sksksk\",\r\n    // \"licenseNo\":\"kssksk-3838238\",\r\n    // \"frontImage\":\"uploads\\\\profileImage\\\\1703599593608.jpg\",\r\n    // \"backImage\":\"uploads\\\\profileImage\\\\1704117368932.jpg\"\r\n    \r\n\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/profile/updateProfile",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"profile",
								"updateProfile"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteProfile",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/profile/deleteProfile/6583db6575a6f29a6c17ee75",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"profile",
								"deleteProfile",
								"6583db6575a6f29a6c17ee75"
							]
						}
					},
					"response": []
				},
				{
					"name": "getProfileById",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/profile/getProfileById/658ab1a6ae0b10231ba201e1",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"profile",
								"getProfileById",
								"658ab1a6ae0b10231ba201e1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Contact Us",
			"item": [
				{
					"name": "createContactUs",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTFAZ21haWwuY29tIiwiaWQiOiI2NThiZjI2ZjAyNjQxMGZjZTBmNDIyZGUiLCJpYXQiOjE3MDM2NzA2ODEsImV4cCI6MTcwNDEwMjY4MX0.-a1YHnPUdExy0WgII-cQ1pSfIVCRVdctBavZf1Aienw",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"firstName\": \"Muhammad faizan\",\r\n  \"lastName\": \"noor\",\r\n  \"email\": \"faizan@gmail.com\",\r\n  \"phone\": \"30405050126\",\r\n  \"message\": \"this app is very good, it is cheap and very efficient\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://6387-110-39-24-146.ngrok-free.app/contact/createContact",
							"protocol": "https",
							"host": [
								"6387-110-39-24-146",
								"ngrok-free",
								"app"
							],
							"path": [
								"contact",
								"createContact"
							]
						}
					},
					"response": []
				},
				{
					"name": "getContact",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/contact/getContact",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"contact",
								"getContact"
							]
						}
					},
					"response": []
				},
				{
					"name": "deleteContact",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/contact/deleteContact/658a920290ba9abd63ca7caf",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"contact",
								"deleteContact",
								"658a920290ba9abd63ca7caf"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Favourite Car",
			"item": [
				{
					"name": "favourite",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTErMUBnbWFpbC5jb20iLCJpZCI6IjY1ZThhOTkyZWYzY2Y5NDA4NjE3OGVmZCIsImlhdCI6MTcwOTc0NjYyMywiZXhwIjoxNzEwMTc4NjIzfQ.t9okNxVxkOJ2Gx8ZsZ81nl8NJNsM-Y0q6elEjHA3-Ck",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"carId\": \"65c36ab6019bb8f14c87ccd2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/fav/favoriteCar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"fav",
								"favoriteCar"
							]
						}
					},
					"response": []
				},
				{
					"name": "get favourite cars",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTErMUBnbWFpbC5jb20iLCJpZCI6IjY1ZThhOTkyZWYzY2Y5NDA4NjE3OGVmZCIsImlhdCI6MTcwOTc0NjYyMywiZXhwIjoxNzEwMTc4NjIzfQ.t9okNxVxkOJ2Gx8ZsZ81nl8NJNsM-Y0q6elEjHA3-Ck",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/fav/getFavouriteCars",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"fav",
								"getFavouriteCars"
							]
						}
					},
					"response": []
				},
				{
					"name": "unFavoriteCar",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTErMUBnbWFpbC5jb20iLCJpZCI6IjY1ZThhOTkyZWYzY2Y5NDA4NjE3OGVmZCIsImlhdCI6MTcwOTc0NjYyMywiZXhwIjoxNzEwMTc4NjIzfQ.t9okNxVxkOJ2Gx8ZsZ81nl8NJNsM-Y0q6elEjHA3-Ck",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"carId\": \"65c36a89019bb8f14c87ccce\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/fav/unFavoriteCar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"fav",
								"unFavoriteCar"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Order Info",
			"item": [
				{
					"name": "createOrder",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTErMUBnbWFpbC5jb20iLCJpZCI6IjY1ZThhOTkyZWYzY2Y5NDA4NjE3OGVmZCIsImlhdCI6MTcwOTc0NjYyMywiZXhwIjoxNzEwMTc4NjIzfQ.t9okNxVxkOJ2Gx8ZsZ81nl8NJNsM-Y0q6elEjHA3-Ck",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"carId\": \"65c36a89019bb8f14c87ccce\",\r\n  \"Name\": \"Faizan\",\r\n  \"PhoneNo\": 3838383939,\r\n  \"Address\": \"jinnah town\",\r\n  \"Town\": \"dfvnrfmksdrnfsefn\",\r\n  \"pickupLocation\": \"jinnah town sadiqabad\",\r\n  \"pickupDate\": \"2024-01-02\",\r\n  \"pickupTime\": \"15:00:00\",\r\n  \"dropOffLocation\": \"Wapda town lahore\",\r\n  \"dropOffDate\": \"2024-01-03\",\r\n  \"dropOffTime\": \"15:00:00\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:5000/order/createOrder",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "5000",
							"path": [
								"order",
								"createOrder"
							]
						}
					},
					"response": []
				},
				{
					"name": "getOrder",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/order/getOrder?page=1&limit=5",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"order",
								"getOrder"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "5"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "get user ordres",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1mYWl6YW5ub29yMTErMUBnbWFpbC5jb20iLCJpZCI6IjY1ZThhOTkyZWYzY2Y5NDA4NjE3OGVmZCIsImlhdCI6MTcwOTc0NjYyMywiZXhwIjoxNzEwMTc4NjIzfQ.t9okNxVxkOJ2Gx8ZsZ81nl8NJNsM-Y0q6elEjHA3-Ck",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://40.117.141.7:5000/order/getUserOrder",
							"protocol": "http",
							"host": [
								"40",
								"117",
								"141",
								"7"
							],
							"port": "5000",
							"path": [
								"order",
								"getUserOrder"
							],
							"query": [
								{
									"key": "page",
									"value": "1",
									"disabled": true
								},
								{
									"key": "limit",
									"value": "5",
									"disabled": true
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "updateStatus",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"orderId\": \"6572edcf927ba68fec032f59\", \r\n    \"status\": \"available\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "https://c502-39-44-92-220.ngrok-free.app/order/updateStatus",
							"protocol": "https",
							"host": [
								"c502-39-44-92-220",
								"ngrok-free",
								"app"
							],
							"path": [
								"order",
								"updateStatus"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}