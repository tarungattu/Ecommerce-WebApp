package com.tarungattu.e_commerce_project.services;

import com.tarungattu.e_commerce_project.models.Product;
import com.tarungattu.e_commerce_project.repos.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepo productRepo;

    public ProductService(ProductRepo productRepo){
        this.productRepo = productRepo;
    }

    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }
}
