package com.tarungattu.e_commerce_project.repos;

import com.tarungattu.e_commerce_project.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {

}
